import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const SideNav = () => {
  const [open, setOpen] = useState(true);

  const users = [
    {
      id: 1,
      name: "Jhon Wick",
      photo:
        "https://i.pinimg.com/736x/92/6c/8e/926c8e161cde3909dcd0f54fa1ff9483.jpg",
    },
    {
      id: 2,
      name: "Alice Johnson",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      name: "Robert Wilson",
      photo: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-24"
      } p-5 pt-8 duration-300 h-screen bg-custom-primary relative`}
    >
      {/* Toggle Button */}
      <FaChevronLeft
        onClick={() => setOpen(!open)}
        className={`absolute cursor-pointer -right-4 top-9 w-8 border-2 border-dark-purple bg-white text-black rounded-full py-2 text-4xl ${
          !open && "rotate-180"
        }`}
      />

      {/* Sidebar Title */}
      <div className="flex gap-x-4 items-center mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3wwwwNU74zh2e-zFTxkO_9-NVYipdafgGQ&s"
          alt="Logo"
          className="w-14 h-14 rounded-full"
        />
        <h4
          className={`font-fugaz origin-left font-medium duration-300 text-white ${!open && "scale-0"}`}
        >
          DevTalks
        </h4>
      </div>

      {/* User List */}
      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
          >
            <img
              src={user.photo}
              alt={user.name}
              className="w-14 h-14 rounded-full border-2 border-white"
            />
            <p
              className={`text-white font-medium duration-300 ${
                !open && "hidden"
              }`}
            >
              {user.name}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
