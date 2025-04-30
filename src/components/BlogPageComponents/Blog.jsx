import React, { useContext, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate, useRevalidator } from 'react-router';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';
// import useGetRelativeTime from '../../Hooks/useGetRelativeTime';
import PageTitle from '../CommonComponents/PageTitle';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { IoMdTime } from 'react-icons/io';
import useGetResponses from "../../Hooks/useGetResponses";
import ResponseTextEditor from '../CommonComponents/ResponseTextEditor';
import Loading from '../AuthenticationComponents/Loading';
import ResponseCard from '../QuestionComponent.jsx/ResponseCard';
import { FaRegEye, FaRegUser } from 'react-icons/fa';
import BookmarkButton from '../CommonComponents/BookmarkButton';
import { AuthContext } from '../../Provider/AuthProvider';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { toast } from 'react-toastify';
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import { Tooltip } from 'react-tooltip';
import useUpdateViews from '../../Hooks/useUpdateViews';

const Blog = () => {
    const blogData = useLoaderData()
    const { revalidate } = useRevalidator();
    const {_id, author, authorEmail, title, shortDescription, tags, image, longDescription, createdAt} = blogData
    useUpdateViews(_id, revalidate, "blog")
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    // const formatRelativeTime= useGetRelativeTime()
    const {user} = useContext(AuthContext)
    const secureAxios= useSecureAxios() 
    const navigate= useNavigate()

    const [responseTo, setResponseTo] = useState("")

    const {loading, responses, refetch} = useGetResponses(_id)

    const handleDeleteButton= async ()=>{
        const deleteNote = window.confirm(`Are you sure about deleting this blog?`);
        if (deleteNote) {
            try {
                await secureAxios.delete(`/blogs/deleteBlog/${_id}`);
                navigate(-1)
                toast.info(`You have successfully deleted one blog!`);
            } catch (error) {
                toast.error(`Failed to delete one blog!`);
                console.error(error);
            }
        }
    }

    return (
        <main className="py-16 space-y-8">
            <PageTitle title={`Blog: ${title}`} />
            <section >
                <div className="container">
                    <div className="space-y-2">
                        <h3>{title}</h3>
                        <b className='block'>{shortDescription}</b>

                        <div className="flex items-center gap-3">
                            <BookmarkButton _id={_id} type='blog'/>

                            {
                                (user?.email===authorEmail) && 
                                <>
                                    <Link to={`/update-blog/${_id}`} className={`updateBlog p-2 duration-500 rounded-full border text-white border-custom-gray hover:text-black hover:bg-white`}>
                                        <RiEdit2Fill className="" />
                                    </Link>
                            
                                    <Tooltip
                                        anchorSelect=".updateBlog"
                                        className="!bg-custom-primary"
                                    >
                                        Update your blog
                                    </Tooltip>

                                    <div onClick={handleDeleteButton} className={`deleteBlog p-2 duration-500 rounded-full border text-white border-custom-gray hover:text-black hover:bg-white`}>
                                        <RiDeleteBin2Fill className="" />
                                    </div>
                                    <Tooltip
                                        anchorSelect=".deleteBlog"
                                        className="!bg-custom-primary"
                                    >
                                        Delete this blog
                                    </Tooltip>
                                </>
                            }
                        </div>

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

                            <div className="flex items-center gap-1">
                                <FaRegEye className="" />
                                <p>{blogData.views?.length}</p> 
                            </div>
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

                        <div ref={highlightRef} className="editorContents" dangerouslySetInnerHTML={{ __html: longDescription }}></div>

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
                                <ResponseCard key={index} responseTo={responseTo} setResponseTo={setResponseTo} responseData={response} mainRefetch={refetch} />
                            ))
                        )
                    }
                </div>
            </section>

        </main>
    );
};

export default Blog;
