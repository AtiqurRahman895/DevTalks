import { Link, useLoaderData } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";
import useGetRelativeTime from "../../Hooks/useGetRelativeTime";
import useHighlightCodeBlock from "../../Hooks/useHighlightCodeBlock";
import { useRef, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import { FaBookmark, FaRegClock, FaRegUser, FaReply } from "react-icons/fa";
import ResponseTextEditor from "./ResponseTextEditor";
import useGetResponses from "../../Hooks/useGetResponses";
import Loading from "../AuthenticationComponents/Loading";
import ResponseCard from "./ResponseCard";

const Question = () => {
    const questionData = useLoaderData()
    const {_id, asker, askerEmail, title, question, tags, createdAt} = questionData
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    const formatRelativeTime= useGetRelativeTime()

    const [responseTo, setResponseTo] = useState("")

    const {loading, responses, refetch} = useGetResponses(_id)

    return (
        <main className="py-16 space-y-8">
            <PageTitle title={`Question: ${title}`} />
            <section >
                <div className="container">
                    <div className="px-4 bg-custom-half-gray border border-custom-gray rounded-lg">

                        <div className="py-4 border-b border-custom-gray space-y-1">

                            <h3 className="!text-wrap break-all">{title}</h3>
                            <div className="flex flex-wrap gap-x-3 gap-y-0">

                                <Link to="/profile" className="flex items-center gap-1">
                                    <FaRegUser className="" />
                                    <p className="cursor-pointer hover:underline">
                                        {asker}
                                    </p>
                                </Link>
                    
                                <div className="flex items-center gap-1">
                                    <FaRegClock className="" />
                                    <p>{formatRelativeTime(createdAt)} ({new Date(createdAt).toLocaleDateString()})</p> 
                                </div>
                                        
                            </div>

                            <div className="flex flex-wrap gap-1">
                                {
                                    tags.map((tag, index)=>(
                                        <Link key={index} className='font-bold text-custom-gray hover:text-custom-primary hover:underline'>
                                            #{tag}{(tags.length-1 !== index) && ","}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div ref={highlightRef} className="!whitespace-pre-wrap editorContents py-4" dangerouslySetInnerHTML={{ __html: question }}></div>

                        <div className="py-4 border-t border-custom-gray">
                            <div className="flex flex-wrap gap-3">

                                <div className="upvote p-2 duration-500 text-white hover:text-black hover:bg-white border border-custom-gray hover:border-custom-primary rounded-full">
                                    <BiSolidUpArrow className="" />
                                </div>

                                <Tooltip
                                    anchorSelect=".upvote"
                                    className="!bg-custom-primary"
                                >
                                    Upvote, if this question is helpful and well-written
                                </Tooltip>

                                <div className="downvote p-2 duration-500 text-white hover:text-black hover:bg-white border border-custom-gray hover:border-custom-primary rounded-full">
                                    <BiSolidDownArrow className="" />
                                </div>

                                <Tooltip
                                    anchorSelect=".downvote"
                                    className="!bg-custom-primary"
                                >
                                    Downvote, if this question is unclear, or unhelpful
                                </Tooltip>

                                <div className="bookmark p-2 duration-500 text-white hover:text-black hover:bg-white border border-custom-gray hover:border-custom-primary rounded-full">
                                    <FaBookmark className="" />
                                </div>

                                <Tooltip
                                    anchorSelect=".bookmark"
                                    className="!bg-custom-primary"
                                >
                                    Add this Question to wishlist!
                                </Tooltip>

                                <div onClick={()=>setResponseTo((pre)=>pre!==_id&&_id)} className={`respond p-2 duration-500 rounded-full border ${responseTo===_id ? "text-black bg-white" : "text-white border-custom-gray"}`}>
                                    <FaReply className="" />
                                </div>
                            
                                <Tooltip
                                    anchorSelect=".respond"
                                    className="!bg-custom-primary"
                                >
                                    Respond.
                                </Tooltip>

                            </div>
                        </div>

                        {
                            (responseTo===_id) && 
                            <div className="py-4 border-t border-custom-gray">
                                <ResponseTextEditor responseTo={responseTo} setResponseTo={setResponseTo} commentOnly={false} refetch={refetch} />
                            </div>
                        }
                    </div>
                </div>
            </section>

            <section>
                {
                    loading ? <Loading /> :

                    <div className="container space-y-5">
                        <h4>{responses.length===0?"No answers or comments yet":"Answers & Comments"}</h4>

                        {responses.map((response,index)=>(
                            <ResponseCard key={index} responseTo={responseTo} setResponseTo={setResponseTo} responseData={response} refetch={refetch} />
                        ))}
                    </div>


                }
            </section>

        </main>
    );
};

export default Question;