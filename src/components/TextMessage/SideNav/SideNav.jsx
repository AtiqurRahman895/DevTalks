import React, { useState } from "react";
import { FaChevronLeft, FaHome } from "react-icons/fa";
import image from "/download.png";
import { Link } from "react-router";

const SideNav = () => {
  const [open, setOpen] = useState(true);

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

  return (
    <div
      className={`${
        open ? "w-72" : "w-24"
      } p-3 pt-4 duration-300 bg-custom-half-primary relative flex flex-col justify-between`}
    >
      {/* Toggle Button */}
      <FaChevronLeft
        onClick={() => setOpen(!open)}
        className={`z-50 absolute cursor-pointer -right-4 top-9 w-7 border-2 border-dark-purple bg-white text-black rounded-full py-2 px-2 text-4xl ${
          !open && "rotate-180"
        }`}
      />

      {/* Sidebar Content */}
      <div>
        {/* Sidebar Title */}
        <div className="flex gap-x-2 items-center mb-2">
          {/* logo message */}
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={image} />
            </div>
          </div>

          {/* Search Input */}
          <label className={`input ${!open && "scale-0"} flex items-center`}>
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" placeholder="Search" />
          </label>
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto max-h-[74vh]">
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <Link
            to={`/message/${user.name}`}
              key={user.id}
              className="flex items-center gap-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
            >
              <img
                src={user.photo}
                alt={user.name}
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <div className={`${!open && "hidden"}`}>
                <p className="text-white font-medium">{user.name}</p>
                <p className="text-gray-300 text-sm">{user.email}</p>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between bg-gray-800 p-3 rounded-lg mt-4">
        {/* User Profile */}
        <Link to="/profile" className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://i.pinimg.com/736x/92/6c/8e/926c8e161cde3909dcd0f54fa1ff9483.jpg" />
            </div>
          </div>
          {open && (
            <div>
              <p className="text-white font-medium">John Wick</p>
              <p className="text-gray-300 text-sm">johnwick@gmail.com</p>
            </div>
          )}
        </Link>

        {/* Home Button */}
        <Link to="/" className={`${!open && "scale-0"} p-2 bg-gray-700 text-white rounded-full`}>
          <FaHome size={20} />
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
