import React from "react";
import BlogCard from "../CommonComponents/BlogCard";

const AllBlogs = ({blogsCount=0, allBlogs=[]}) => {
  return (
    <div className="space-y-4">
        <h5>{blogsCount} blogs</h5>

        <div className="space-y-6">
            {allBlogs.map((blog,index) => (
                <BlogCard key={index} blog={blog}/>
            ))}
        </div>
    </div>
  );
};


export default AllBlogs;