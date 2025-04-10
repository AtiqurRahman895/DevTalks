import React, { useRef } from "react";
import { Link } from "react-router";
import useHighlightCodeBlock from "../../../Hooks/useHighlightCodeBlock";
import useGetRelativeTime from "../../../Hooks/useGetRelativeTime";
import { FaRegClock } from "react-icons/fa";


const PfpAnswerCard = ({ answer }) => {
  const highlightRef = useRef(null);
    useHighlightCodeBlock(true, highlightRef)
    const formatRelativeTime= useGetRelativeTime()
  return (
    <div className="py-6 px-4 bg-custom-half-gray border border-custom-half-gray rounded-lg space-y-2">
      {/* Question links */}
      <Link
        to="#"
        className="text-custom-primary hover:underline cursor-pointer"
      >
        <h5>see questions</h5>
      </Link>

      {/* Answer Highlight Section */}
      <div className="pl-3 rounded-md border-l-4 border-custom-primary">
        {/* <p className="text-white">
          <strong className="text-blue-500">Answer:</strong>{" "}
          {answer.answer.length > 200
            ? answer.answer.substring(0, 200) + "..."
            : answer.answer}
        </p> */}
        <div ref={highlightRef} className="!whitespace-pre-wrap editorContents py-4" dangerouslySetInnerHTML={{ __html: answer.response }}></div>
      </div>
      {/* Votes & Date */}
      <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-1">
                            <FaRegClock className="" />
                            <p>{formatRelativeTime(answer.createdAt)}</p> 
                        </div>
        <p className="text-gray-400">{answer.votes}</p>
      </div>
    </div>
  );
};

export default PfpAnswerCard;
