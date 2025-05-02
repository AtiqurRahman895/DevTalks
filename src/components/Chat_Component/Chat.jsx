import axios from 'axios';
import React, { useState, useEffect, useRef, useContext } from 'react';
import io from 'socket.io-client';
import chat_bg from '../../assets/chat_bg.jpg';
import { AuthContext } from "../../Provider/AuthProvider";

function Chat() {
  const { user } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');

    socketRef.current.on('connect', () => {
      setIsConnected(true);
    });

    socketRef.current.on('private message', ({ from, message }) => {
      setMessages((prev) => [...prev, { from, message }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/allUser');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

   

  useEffect(() => {
    if (user.email) {
      socketRef.current.emit('join',user);
      setHasJoined(true);
    }
  }, [user])

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username && selectedUser) {
      socketRef.current.emit('private message', { to: selectedUser, message });
      setMessages((prev) => [...prev, { from: username, message }]);
      setMessage('');
    }
  };

  const handleSelectUser = (user) => {
    if (user.name === username) {
      alert("You can't DM yourself!");
      return;
    }
    setSelectedUser(user.name);
  };


  console.log(user?.email);


  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      {!user?.email ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          {loading && <p className="text-center text-gray-500">Loading users...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
      ) : (
        <div className="flex w-full h-screen">
          {/* Sidebar */}
          <div className="w-1/4 bg-black shadow-md p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">All Users</h2>
            <ul className="space-y-2">
              {users
                .filter((u) => u.username !== username)
                .map((user, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectUser(user)}
                    className={`cursor-pointer p-2 rounded list-none ${selectedUser === user.name ? 'bg-custom-primary text-white' : 'hover:bg-custom-primary'}`}
                  >
                    {user.name}
                  </li>
                ))}
            </ul>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                <img src="" alt="" />
                {selectedUser ? `Chatting with @${selectedUser}` : 'Select a user to start chatting'}
              </h2>
              <span className="text-sm text-gray-500">{isConnected ? '🟢 Connected' : '🔴 Disconnected'}</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-900 rounded border mb-4 bg-blend-overlay" style={{ backgroundImage: `url(${chat_bg})` }}>
              {selectedUser ? (
                messages
                  .filter(
                    (msg) =>
                      (msg.from === username && selectedUser) ||
                      (msg.from === selectedUser)
                  )
                  .map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-2 ${msg.from === username ? 'text-right' : 'text-left'}`}
                    >
                      <span
                        className={`inline-block p-2 rounded-full px-4 ${msg.from === username
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                          }`}
                      >
                        <strong>{msg.from}:</strong> {msg.message}
                      </span>
                    </div>
                  ))
              ) : (
                <p className="text-center text-gray-400 mt-10">Please select a user to chat.</p>
              )}
            </div>


            {/* form area */}

            {selectedUser && (
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Message @${selectedUser}...`}
                  className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-custom-primary"
                />
                <button
                  type="submit"
                  className="bg-custom-primary px-4 text-white p-2 rounded hover:bg-custom-primary transition"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
