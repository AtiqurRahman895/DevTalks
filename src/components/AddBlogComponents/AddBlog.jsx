import React from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import BlogForm from './BlogForm';

const AddBlog = () => {
    return (
        <main>
            <PageTitle title="Add blog" />
            <section className="py-16">
                <div className="container space-y-6">

                    <h3>Add a blog</h3>

                    <div className="w-full">
                        <BlogForm />
                    </div>


                </div>
            </section>
        </main>
    );
};

export default AddBlog;

