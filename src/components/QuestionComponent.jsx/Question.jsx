import { Link, useLoaderData, useNavigate, useRevalidator } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";
import useGetRelativeTime from "../../Hooks/useGetRelativeTime";
import useHighlightCodeBlock from "../../Hooks/useHighlightCodeBlock";
import { useContext, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { FaRegClock, FaRegEye, FaRegUser, FaReply } from "react-icons/fa";
import ResponseTextEditor from "../CommonComponents/ResponseTextEditor";
import useGetResponses from "../../Hooks/useGetResponses";
import Loading from "../AuthenticationComponents/Loading";
import ResponseCard from "./ResponseCard";
import UpvoteDownvoteButtons from "./UpvoteDownvoteButtons";
import BookmarkButton from "../CommonComponents/BookmarkButton";
import { AuthContext } from "../../Provider/AuthProvider";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { toast } from "react-toastify";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import AiResponseCard from "./AiResponseCard";
import useUpdateViews from "../../Hooks/useUpdateViews";

const Question = () => {
    const questionData = useLoaderData()
    const { revalidate } = useRevalidator();
    const {_id, asker, askerEmail, title, question, tags, createdAt} = questionData
    useUpdateViews(_id, revalidate, "question")
    const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    const formatRelativeTime= useGetRelativeTime()
    const {user} = useContext(AuthContext)
    const secureAxios= useSecureAxios() 
    const navigate= useNavigate()

    const [responseTo, setResponseTo] = useState("")
    
    const {loading, responses, refetch} = useGetResponses(_id)

    const handleDeleteButton= async ()=>{
        const deleteNote = window.confirm(`Are you sure about deleting this question?`);
        if (deleteNote) {
            try {
                await secureAxios.delete(`/questions/deleteQuestion/${_id}`);
                navigate(-1)
                toast.info(`You have successfully deleted one question!`);
            } catch (error) {
                toast.error(`Failed to delete one question!`);
                console.error(error);
            }
        }
    }

    return (
        <main className="py-16 space-y-8">
            <PageTitle title={`Question: ${title}`} />
            <section >
                <div className="container">
                    <div className="px-4 bg-custom-half-gray border border-custom-gray rounded-lg">

                        <div className="py-4 border-b border-custom-gray space-y-1">

                            <h3 className="!text-wrap break-all">{title}</h3>
                            <div className="flex flex-wrap gap-x-3 gap-y-0">

                                <Link to={`/profile/${askerEmail}`} className="flex items-center gap-1">
                                    <FaRegUser className="" />
                                    <p className="cursor-pointer hover:underline">
                                        {asker}
                                    </p>
                                </Link>
                    
                                <div className="flex items-center gap-1">
                                    <FaRegClock className="" />
                                    <p>{formatRelativeTime(createdAt)} ({new Date(createdAt).toLocaleDateString()})</p> 
                                </div>

                                <div className="flex items-center gap-1">
                                    <FaRegEye className="" />
                                    <p>{questionData.views?.length}</p> 
                                </div>
                                        
                            </div>

                            <div className="flex flex-wrap gap-1">
                                {
                                    tags.map((tag, index)=>(
                                        <Link to={`/questions?tag=${tag}`} key={index} className='font-bold text-custom-gray hover:text-custom-primary hover:underline'>
                                            #{tag}{(tags.length-1 !== index) && ","}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        <div ref={highlightRef} className=" editorContents py-4" dangerouslySetInnerHTML={{ __html: question }}></div>

                        <div className="py-4 border-t border-custom-gray">
                            <div className="flex flex-wrap gap-3">

                                <UpvoteDownvoteButtons voteOn={_id} forQuestion={true} totalVotes={questionData.votes||0} />

                                <BookmarkButton _id={_id} type="question" />

                                <div onClick={()=>setResponseTo((pre)=>pre!==_id&&_id)} className={`respond p-2 duration-500 rounded-full border ${responseTo===_id ? "text-black bg-white" : "text-white border-custom-gray"}`}>
                                    <FaReply className="" />
                                </div>
                            
                                <Tooltip
                                    anchorSelect=".respond"
                                    className="!bg-custom-primary"
                                >
                                    Respond
                                </Tooltip>

                                {
                                    (user?.email===askerEmail) && 
                                    <>
                                        <Link to={`/update-question/${_id}`} className={`updateQuestion p-2 duration-500 rounded-full border text-white border-custom-gray hover:text-black hover:bg-white`}>
                                            <RiEdit2Fill className="" />
                                        </Link>
                                    
                                        <Tooltip
                                            anchorSelect=".updateQuestion"
                                            className="!bg-custom-primary"
                                        >
                                            Update your question
                                        </Tooltip>
        
                                        <div onClick={handleDeleteButton} className={`deleteQuestion p-2 duration-500 rounded-full border text-white border-custom-gray hover:text-black hover:bg-white`}>
                                            <RiDeleteBin2Fill className="" />
                                        </div>
                                        <Tooltip
                                            anchorSelect=".deleteQuestion"
                                            className="!bg-custom-primary"
                                        >
                                            Delete this question
                                        </Tooltip>
                                    </>
                                }

                            </div>
                        </div>

                        {
                            (responseTo===_id) && 
                            <div className="py-4 border-t border-custom-gray">
                                <ResponseTextEditor responseTo={responseTo} setResponseTo={setResponseTo} commentOnly={false} refetch={refetch} defaultResponseType="comment"/>
                            </div>
                        }
                    </div>
                </div>
            </section>

            <section>
                {
                    loading ? <Loading /> :

                    <div className="container space-y-5">

                        {
                            questionData?.aiResponse &&
                            <AiResponseCard aiResponse={questionData.aiResponse}/>
                        }

                        <h4>{responses.length===0?"No answers or comments yet":"Answers & Comments"}</h4>

                        {responses.map((response,index)=>(
                            <ResponseCard key={index} responseTo={responseTo} setResponseTo={setResponseTo} responseData={response} questionId={_id} mainRefetch={refetch} />
                        ))}
                    </div>


                }
            </section>

        </main>
    );
};

export default Question;