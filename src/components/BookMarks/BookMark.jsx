import React from 'react';
import BookMarkCard from './BookMarkCard';
import { CiSearch } from "react-icons/ci";

const BookMark = () => {
    return (
        <div>

            <div className='text-center py-16 container bg-[#3f405a40] rounded-lg my-8 '>
                <h3>Bookmark</h3>
                <p className='md:w-2/4 sm:w-4/5 mx-auto leading-[17px] '> Easily bookmark questions, answers, blog posts, and discussions to revisit later. Keep track of valuable insights and learning resources in one place.</p>
            </div>

            <div className='container my-4'>


            <div className="flex items-center w-full max-w-lg bg-[#0f0f11] border border-gray-700 rounded-lg px-4 mx-auto md:max-w-xl lg:max-w-2xl">
      <input
        type="text"
        placeholder="Find bookmarks by tags..."
        
        className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-sm md:text-base"
      />
      <div className="border-l border-gray-700 h-6 mx-3 hidden md:block"></div>
      <button className="text-gray-400 hover:text-purple-400 transition duration-200 text-sm md:text-base">
        Search by Tag ▼
      </button>
    </div>
            </div>

            <div className='container h-screen'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <BookMarkCard></BookMarkCard>
                    <BookMarkCard></BookMarkCard>
                </div>
            </div>

        </div>
    );
};

export default BookMark;