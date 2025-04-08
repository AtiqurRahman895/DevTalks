import React, { useRef } from 'react';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';
import useGetRelativeTime from '../../Hooks/useGetRelativeTime';
import { Link } from 'react-router';
import { FaRegClock, FaRegUser, FaReply } from 'react-icons/fa';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { Tooltip } from 'react-tooltip';
import ResponseTextEditor from './ResponseTextEditor';
import useGetResponses from '../../Hooks/useGetResponses';
import Loading from '../AuthenticationComponents/Loading';

const ResponseCard = ({responseTo, setResponseTo, responseData }) => {
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    const formatRelativeTime= useGetRelativeTime()
    const {_id, responder, responderEmail, responseType, response, createdAt}= responseData

    const {loading, responses, refetch} = useGetResponses(_id)


    return (
        <div className="">
            <div className="px-4 border bg-custom-half-gray border-custom-gray rounded-lg">
                <div className="py-4 border-b border-custom-gray space-y-1">

                    {
                        responseType==="answer" && <h6 className='text-custom-primary'>Answered By:</h6>
                    }

                    <div className="flex flex-wrap gap-x-3 gap-y-0">

                        <Link to={`/profile/${responder}`} className="flex items-center gap-1">
                            <FaRegUser className="" />
                            <p className="cursor-pointer hover:underline">
                                {responder}
                            </p>
                        </Link>
            
                        <div className="flex items-center gap-1">
                            <FaRegClock className="" />
                            <p>{formatRelativeTime(createdAt)}</p> 
                        </div>
                                
                    </div>

                </div>

                <div ref={highlightRef} className="!whitespace-pre-wrap editorContents py-4" dangerouslySetInnerHTML={{ __html: response }}></div>

                <div className="py-4 border-t border-custom-gray">
                    <div className="flex flex-wrap gap-3">

                        {
                            (responseType==="answer") &&
                            <>
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
                            </>
                        }



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
                        <ResponseTextEditor responseTo={responseTo} setResponseTo={setResponseTo} refetch={refetch} />
                    </div>
                }
            </div>

            {
                    (!loading && responses.length!==0) &&

                    <div className="pl-4 pt-4 border-l border-custom-primary space-y-5">
                        {responses.map((response,index)=>(
                            <ResponseCard key={index} responseTo={responseTo} setResponseTo={setResponseTo} responseData={response} refetch={refetch} />
                        ))}
                    </div>
            }
        </div>

    );
};

export default ResponseCard;