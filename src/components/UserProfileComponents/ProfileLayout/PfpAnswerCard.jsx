import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router";

const PfpAnswerCard = ({ answer }) => {
  return (
    <div className="py-6 px-4 bg-Custom-half-Gray border border-Custom-half-Gray rounded-lg space-y-2">
      {/* Question links */}
      <Link
        to="#"
        className="text-custom-primary hover:underline cursor-pointer"
      >
        <h5>{answer.question}</h5>
      </Link>

      {/* Answer Highlight Section */}
      <div className="bg-gray-700 p-3 rounded-md border-l-4 border-custom-primary">
        <p className="text-white">
          <strong className="text-blue-500">Answer:</strong>{" "}
          {answer.answer.length > 200
            ? answer.answer.substring(0, 200) + "..."
            : answer.answer}
        </p>
      </div>

      {/* Votes & Date */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-4 text-gray-400">
          <p className="flex items-center gap-2">
          <FaThumbsUp /> 
            {answer.votes.upvotes}
          </p>
          <p className="flex items-center gap-2">
          <FaThumbsDown />
            {answer.votes.downvotes}
          </p>
        </div>

        <p className="text-gray-400">{answer.date}</p>
      </div>
    </div>
  );
};

export default PfpAnswerCard;
