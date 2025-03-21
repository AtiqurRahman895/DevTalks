import React from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import AddBlogForm from './AddBlogForm';

const AddBlog = () => {
    return (
        <main>
            <PageTitle title="Ask question" />
            <section className="py-16">
                <div className="container space-y-6">

                    <h3>Add a blog</h3>

                    <div className="w-full">
                        <AddBlogForm />
                    </div>


                </div>
            </section>
        </main>
    );
};

export default AddBlog;

