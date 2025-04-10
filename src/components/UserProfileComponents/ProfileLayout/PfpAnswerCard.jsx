import React, { useRef } from "react";
import { Link } from "react-router";
import useHighlightCodeBlock from "../../../Hooks/useHighlightCodeBlock";
import useGetRelativeTime from "../../../Hooks/useGetRelativeTime";
import { FaRegClock } from "react-icons/fa";
import { MdWhereToVote } from "react-icons/md";

const PfpAnswerCard = ({ answer }) => {
  const highlightRef = useRef(null);
  useHighlightCodeBlock(true, highlightRef);
  const formatRelativeTime = useGetRelativeTime();
  return (
    <div className="py-6 px-4 bg-custom-half-gray border border-custom-half-gray rounded-lg space-y-2">
      {/* Answer Highlight Section */}
      <div className="pl-3 rounded-md border-l-4 border-custom-primary">
        <div
          ref={highlightRef}
          className="!whitespace-pre-wrap editorContents py-4"
          dangerouslySetInnerHTML={{ __html: answer.response }}
        ></div>
      </div>
      {/* Votes & Date */}
      <div className="flex items-center justify-between mt-4">
              {/* Question links */}
      <Link
        to={`/question/${answer.responseTo}`}
        className="text-custom-primary hover:underline cursor-pointer"
      >
        <h6>see questions</h6>
      </Link>
        <p className="text-gray-400 text-lg flex items-center gap-2">
        <div className="flex items-center gap-1">
          <FaRegClock className="" />
          <p>{formatRelativeTime(answer.createdAt)}</p>
        </div>
          <MdWhereToVote className="text-lg" />
          {answer.votes}
        </p>
      </div>
    </div>
  );
};

export default PfpAnswerCard;
