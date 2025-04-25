import React from "react";
import BlogCard from "../CommonComponents/BlogCard";

const AllBlogs = ({blogsCount=0, allBlogs=[]}) => {
  return (
    <div className="space-y-4">
        <h5>{blogsCount} blogs</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allBlogs.map((blog,index) => (
                <BlogCard key={index} blog={blog} showImage={true} />
            ))}
        </div>
    </div>
  );
};


export default AllBlogs;