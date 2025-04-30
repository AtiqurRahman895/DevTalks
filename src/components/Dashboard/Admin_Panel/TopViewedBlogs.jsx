import React from 'react';
import useNormalAxios from '../../../Hooks/useNormalAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

const TopViewedBlogs = () => {
  const normalAxios = useNormalAxios()

  const fetchTopViewedBlogs= async() => {
      const params = {
          projection: JSON.stringify({title:1, views:1}), 
          sort: {votes:-1},
          limit:5, 
      };
      const res=await normalAxios.get("/blogs/blogs", {params})
      return res.data
  };

  const { data:blogs=[] } = useQuery(
      ['topViewedBlogs'],
      fetchTopViewedBlogs,
      {
        onError: (error) => {
          console.error(error);
        }
      }
  );

  return (
    <div className="p-4 bg-custom-primary rounded-lg shadow-md space-y-5">
      <h5 className="">
        Top 5 most viewed blogs 
      </h5>

       
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className="">
            <Link to={`/blog/${blog._id}`} className='hover:underline underline-offset-1 font-semibold'>{index+1}. {blog.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopViewedBlogs;