import React from 'react';
import { FaBookmark } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookmarkCard = () => {
    return (
        <div>






            <div className="max-w-7xl mx-auto">
                <div className="relative">
                    <div className="  rounded-lg"></div>
                    <div className=" px-7 py-6 bg-[#3f405a40] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-between space-x-6">
                         
                        <div className="space-y-2 w-4/6">
                            <p className="text-white">How to optimize React performance?</p>
                            <a href="" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read More →</a>
                        </div>
                        <div className='w-1/6 flex justify-end items-center'>
                            <RiDeleteBin6Line className='h-8 w-8 text-red-500 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookmarkCard;