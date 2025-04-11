import React, { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';
import useGetRelativeTime from '../../Hooks/useGetRelativeTime';
import PageTitle from '../CommonComponents/PageTitle';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { IoMdTime } from 'react-icons/io';
import useGetResponses from "../../Hooks/useGetResponses";
import ResponseTextEditor from '../CommonComponents/ResponseTextEditor';
import Loading from '../AuthenticationComponents/Loading';
import ResponseCard from '../QuestionComponent.jsx/ResponseCard';
import { FaRegUser } from 'react-icons/fa';

const Blog = () => {
    const blogData = useLoaderData()
    const {_id, author, authorEmail, title, shortDescription, tags, image, LongDescription, createdAt} = blogData
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    const formatRelativeTime= useGetRelativeTime()

    const [responseTo, setResponseTo] = useState("")

    const {loading, responses, refetch} = useGetResponses(_id)

    return (
        <main className="py-16 space-y-8">
            <PageTitle title={`Blog: ${title}`} />
            <section >
                <div className="container">
                    <div className="space-y-2">
                        <h3>{title}</h3>
                        <b>{shortDescription}</b>

                        <div className="flex flex-wrap gap-3">
                            <Link to={`/profile/${authorEmail}`} className="flex items-center gap-1">
                                <FaRegUser className="" />
                                <p className="cursor-pointer hover:underline">
                                    {author}
                                </p>
                            </Link>
                            <div className='flex items-center gap-1'>
                                <HiOutlineCalendarDateRange />
                                <p>{new Date(createdAt).toLocaleDateString()}</p>
                            </div>
                            {/* <div className='flex items-center gap-1'>
                                <IoMdTime /> 
                                <p>{formatRelativeTime(createdAt)}</p>
                            </div> */}
                        </div>

                        <div className="flex flex-wrap gap-1">
                            {
                                tags.map((tag, index)=>(
                                    <Link to={`/blogs?tag=${tag}`} key={index} className='font-bold text-custom-gray hover:text-custom-primary hover:underline'>
                                        #{tag}{(tags.length-1 !== index) && ","}
                                    </Link>
                                ))
                            }
                        </div>

                        <img src={image?image:""} alt="Blog cover image" className="bg-custom-primary max-w-full m-auto !my-6" />

                        <div ref={highlightRef} className="!whitespace-pre-wrap editorContents" dangerouslySetInnerHTML={{ __html: LongDescription }}></div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container space-y-5">

                    <ResponseTextEditor responseTo={responseTo} setResponseTo={setResponseTo} refetch={refetch} CommentOnBlog={_id} />

                    <h4>{responses.length===0?"No comments yet":"All comments"}</h4>
                    {
                        loading ? <Loading /> :
                        (
                            responses.map((response,index)=>(
                                <ResponseCard key={index} responseTo={responseTo} setResponseTo={setResponseTo} responseData={response} refetch={refetch} />
                            ))
                        )
                    }
                </div>
            </section>

        </main>
    );
};

export default Blog;