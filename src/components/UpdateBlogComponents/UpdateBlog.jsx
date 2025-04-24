import React from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import { useLoaderData } from 'react-router';
import BlogForm from '../AddBlogComponents/BlogForm';

const UpdateBlog = () => {
    const blogData = useLoaderData()

    return (
        <main>
            <PageTitle title={`Update blog: ${blogData.title}`}/>
            <section className="py-16">
                <div className="container space-y-6">

                    <h3>Update this blog</h3>

                    <div className="w-full">
                        <BlogForm defaultBlogData={blogData} />
                    </div>


                </div>
            </section>
        </main>
    );
};

export default UpdateBlog;
