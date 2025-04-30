import React, { useRef } from 'react';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';
import useGetRelativeTime from '../../Hooks/useGetRelativeTime';
import { Link } from 'react-router';
import { BiSolidCommentCheck, BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';


const PreviewQuestion = ({showPreview, title, createdAt, selectedTags, editorContents}) => {
    const highlightRef = useRef(null);
    useHighlightCodeBlock(showPreview, highlightRef)

    const formatRelativeTime= useGetRelativeTime()
    
    return (
        <div className="space-y-6">
            <h5 className='text-custom-primary'>Preview Of Your Question</h5>

            <div className="bg-custom-half-gray border border-custom-gray rounded-lg">
                <div className="p-5 border-b border-custom-gray">
                    <h3>{title}</h3>
                    <div className="flex flex-wrap gap-1">
                        <div className='flex items-center gap-1'>
                            <b className="">Asked:</b>
                            <p>{formatRelativeTime(createdAt)} ({new Date(createdAt).toLocaleDateString()})</p> {/* Relative time */}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {
                            selectedTags.map((tag, index)=>(
                                <Link key={index} className='font-bold text-custom-gray hover:text-custom-primary hover:underline'>
                                    #{tag.value}{(selectedTags.length-1 !== index) && ","}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div ref={highlightRef} className="editorContents p-5" dangerouslySetInnerHTML={{ __html: editorContents }}></div>

                <div className="p-5 border-t border-custom-gray">
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

                        <div className="answer p-2 duration-500 text-white hover:text-black hover:bg-white border border-custom-gray hover:border-custom-primary rounded-full">
                            <BiSolidCommentCheck className="" />
                        </div>

                        <Tooltip
                            anchorSelect=".answer"
                            className="!bg-custom-primary"
                        >
                            Write your answer.
                        </Tooltip>

                        <div className="comment p-2 duration-500 text-white hover:text-black hover:bg-white border border-custom-gray hover:border-custom-primary rounded-full">
                            <BiSolidCommentDetail className="" />
                        </div>
                    
                        <Tooltip
                            anchorSelect=".comment"
                            className="!bg-custom-primary"
                        >
                            Add your comment.
                        </Tooltip>

                    </div>
                </div>
            </div>
        </div> 
    );
};

export default PreviewQuestion;