import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useParams } from "react-router";

const UserInbox = () => {
  const { user: currentUser } = useParams();

  const users = [
    {
      id: 1,
      name: "Jhon Wick",
      email: "jhon.wick@email.com",
      photo:
        "https://i.pinimg.com/736x/92/6c/8e/926c8e161cde3909dcd0f54fa1ff9483.jpg",
    },
    {
      id: 2,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@email.com",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      photo: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      photo: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      photo: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      photo: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "robert.wilson@email.com",
      photo: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  ];

  const inboxUser = users.find((user) => user.name === currentUser);
  console.log(inboxUser);

  return (
    <div className="flex flex-col h-screen">
      {/* top nav */}
      <div className="flex items-center gap-x-2 bg-custom-half-primary px-7 py-2">
        <img
          src={inboxUser.photo}
          alt={inboxUser.name}
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <h4>{inboxUser.name}</h4>
      </div>
       
       {/* show messages field */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <p className="text-center">Start a Conversation....</p>
      </div>

       {/* Message Input Field */}
       <div className="px-3 flex items-center gap-x-3">
        <input
          type="text"
          className="flex-1 p-4 rounded-lg border focus:outline-none bg-custom-half-gray"
          placeholder="Type a message..."
        />
        <button
          className="bg-custom-primary text-white p-2 rounded-full hover:bg-green-600"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default UserInbox;
