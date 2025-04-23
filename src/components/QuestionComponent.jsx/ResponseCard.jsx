/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import useHighlightCodeBlock from '../../Hooks/useHighlightCodeBlock';
import useGetRelativeTime from '../../Hooks/useGetRelativeTime';
import { Link } from 'react-router';
import { FaRegClock, FaRegUser, FaReply } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import ResponseTextEditor from '../CommonComponents/ResponseTextEditor';
import useGetResponses from '../../Hooks/useGetResponses';
import UpvoteDownvoteButtons from './UpvoteDownvoteButtons';
import { RiEdit2Fill } from 'react-icons/ri';
import { AuthContext } from '../../Provider/AuthProvider';

const ResponseCard = ({responseTo, setResponseTo, responseData, questionId="", mainRefetch }) => {
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    const formatRelativeTime= useGetRelativeTime()
    const {_id, responder, responderEmail, responseType, response, createdAt}= responseData
    const {user} = useContext(AuthContext)
    const {loading, responses, refetch} = useGetResponses(_id)

    const [updateId, setUpdateId] = useState("")

    const handleRespondButton=()=>{
        setResponseTo((pre)=>pre!==_id&&_id)
        setUpdateId("")
    }

    const handleUpdateButton=()=>{
        setUpdateId((pre)=>pre!==_id&&_id)
        setResponseTo("")
    }

    return (
        <div className="">
            <div className="px-4 border bg-custom-half-gray border-custom-gray rounded-lg">
                <div className="py-4 border-b border-custom-gray space-y-1">

                    {
                        responseType==="answer" && <h6 className='text-custom-primary'>Answered By:</h6>
                    }

                    <div className="flex flex-wrap gap-x-3 gap-y-0">

                        <Link to={`/profile/${responderEmail}`} className="flex items-center gap-1">
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
                            <UpvoteDownvoteButtons voteOn={_id} totalVotes={responseData.votes||0} />
                        }

                        <div onClick={handleRespondButton} className={`respond p-2 duration-500 rounded-full border ${responseTo===_id ? "text-black bg-white" : "text-white border-custom-gray"}`}>
                            <FaReply className="" />
                        </div>
                    
                        <Tooltip
                            anchorSelect=".respond"
                            className="!bg-custom-primary"
                        >
                            Respond
                        </Tooltip>

                        {
                            (user?.email===responderEmail) && 
                            <>
                                <div onClick={handleUpdateButton} className={`update p-2 duration-500 rounded-full border ${updateId===_id ? "text-black bg-white" : "text-white border-custom-gray"}`}>
                                    <RiEdit2Fill className="" />
                                </div>
                            
                                <Tooltip
                                    anchorSelect=".update"
                                    className="!bg-custom-primary"
                                >
                                    Update your response
                                </Tooltip>
                            </>
                        }



                    </div>
                </div>

                {
                    (responseTo===_id) && 
                    <div className="py-4 border-t border-custom-gray">
                        <ResponseTextEditor responseTo={responseTo} setResponseTo={setResponseTo} refetch={refetch} />
                    </div>
                }
                {
                    (updateId===_id) && 
                    <div className="py-4 border-t border-custom-gray">
                        <ResponseTextEditor responseTo={responseTo} setResponseTo={setResponseTo} commentOnly={questionId!==responseData.responseTo} refetch={mainRefetch||refetch} defaultResponseType={responseType} defaultResponse={response} updateId={updateId} setUpdateId={setUpdateId} />
                    </div>
                }
            </div>

            {
                    (!loading && responses.length!==0) &&

                    <div className="pl-2 xs:pl-4 pt-4 border-l border-custom-primary space-y-5">
                        {responses.map((response,index)=>(
                            <ResponseCard key={index} responseTo={responseTo} setResponseTo={setResponseTo} responseData={response} refetch={refetch}/>
                        ))}
                    </div>
            }
        </div>

    );
};

export default ResponseCard;