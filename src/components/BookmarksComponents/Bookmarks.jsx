import React, { useState } from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../AuthenticationComponents/Loading';
import BookmarkedQuestions from './BookmarkedQuestions';
import BookmarkedBlogs from './BookmarkedBlogs';

const Bookmarks = () => {
    const [showQuestions, setShowQuestion] = useState(true)
    const secureAxios = useSecureAxios()

    const fetchBookmarks= async() => {
        const res=await secureAxios.get("/bookmarks/bookmarks")
        return res.data
    };

    const { isLoading:loading, data:bookmarks={}, isError, error } = useQuery(
        ['questions'],
        fetchBookmarks,
    );

    if (isError) {
        console.error(error);
    }

    return (
        <main className="py-16 space-y-8">
            <PageTitle title="Bookmark" />

            <section className="">
                <div className='container text-center bg-custom-half-gray py-16 rounded-lg '>
                    <h1>Bookmark</h1>
                    <p className='md:w-2/4 sm:w-4/5 mx-auto'> Easily bookmark questions, answers, blog posts, and discussions to revisit later. Keep track of valuable insights and learning resources in one place.</p>

                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button onClick={()=>setShowQuestion(true)} type="button" className={`outlineButton !rounded-full ${showQuestions && "!bg-white !text-black"}`} >Questions</button>
                        <button onClick={()=>setShowQuestion(false)} type="button" className={`outlineButton !rounded-full ${showQuestions || "!bg-white !text-black"}`} >Blogs</button>
                    </div>

                    {/* <div className="flex items-center justify-center gap-4 mt-6">
                        <button onClick={()=>setShowQuestion(true)} type="button" className={`!rounded-full ${showQuestions? "primaryButton":"outlineButton"}`} >Questions</button>
                        <button onClick={()=>setShowQuestion(false)} type="button" className={`!rounded-full ${!showQuestions? "primaryButton":"outlineButton"}`} >Blogs</button>
                    </div> */}

                </div>
            </section>

            <section>
                <div className='container'>
                    {
                        loading?<Loading/>:
                        <>{
                            showQuestions? 
                            <BookmarkedQuestions questions={bookmarks.questions}/> :
                            <BookmarkedBlogs blogs={bookmarks.blogs}/>
                        }</>
                    }
                </div>
            </section>

        </main>
    );
};

export default Bookmarks;