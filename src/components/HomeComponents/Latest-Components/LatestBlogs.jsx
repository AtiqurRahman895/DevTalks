import React from "react";
import { Link } from "react-router";
import useNormalAxios from "../../../Hooks/useNormalAxios";
import { useQuery } from "@tanstack/react-query";
import useGetRelativeTime from "../../../Hooks/useGetRelativeTime";
import { FaRegClock, FaRegUser } from "react-icons/fa";
import Loading from "../../AuthenticationComponents/Loading";
import BlogCard from "../../CommonComponents/BlogCard";
import NotFound from "../../CommonComponents/NotFound";

const LatestBlogs = () => {
  const normalAxios = useNormalAxios()
  const formatRelativeTime= useGetRelativeTime()

  const fetchLatestBlogs= async() => {
      const params = {
          sort:{_id:-1}, 
          limit:5, 
      };

      const res=await normalAxios.get("/blogs/blogs", {params})

      return res.data
  };

  const { isLoading:loading, data:blogs=[], isError, error } = useQuery(
      ['latestBlogs'],
      fetchLatestBlogs,
  );

  if (isError) {
    console.error(error);
  }

  return (
    <div className="space-y-6">
      <h3 className="">
        📰 Latest Blogs
      </h3>

      {
          loading?<Loading />:
          <>{
              blogs?.length===0?

              <NotFound NotFoundText={"Unable to load blogs for some reasion!"}/>:

              <div className="space-y-6 bg-custom-half-gray border border-custom-half-gray rounded-lg p-6">

                {blogs.map((blog,index) => (
                  <BlogCard key={index} blog={blog}/>
                ))}
              </div>
          }</>
      }

    </div>
  );
};

export default LatestBlogs;
