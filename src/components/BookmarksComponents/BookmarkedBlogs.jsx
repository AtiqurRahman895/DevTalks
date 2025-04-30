import React from 'react';
import BlogCard from '../CommonComponents/BlogCard';
import NotFound from '../CommonComponents/NotFound';

const BookmarkedBlogs = ({blogs=[]}) => {
    return (
        <>
        {
            blogs?.length===0?
            <NotFound NotFoundText="No bookmark blogs are found!"/>:

            <div className="space-y-4">
                <h5>{blogs.length} blogs</h5>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {blogs.map((blog,index) => (
                        <BlogCard key={index} blog={blog} showImage={true} />
                    ))}
                </div>
            </div>
        }
        </>
    );
};

export default BookmarkedBlogs;