import React from "react";
import { Link } from "react-router";
import useUserData from "../../../Hooks/User Profile/useUserData";
import NothingProfile from "../../CommonComponents/UserProfile/NothingProfile";
import ProfileLoader from "../../CommonComponents/UserProfile/ProfileLoader";
import useGetRelativeTime from "../../../Hooks/useGetRelativeTime";
import { FaRegClock } from "react-icons/fa";

const PfpAllQuestion = () => {
  const {data: questions, isLoading: questionLoading} = useUserData("questions/questions")
  const formatRelativeTime= useGetRelativeTime()

  if (questions?.length === 0) {
    return (
      <NothingProfile title="User has not asked any questions yet." />
    );
  }

  if(questionLoading){
    return (
      <ProfileLoader />
    );
  }

  return (
    <div className="w-full">
      <div className="grid gap-4">
        {questions.map((question, index) => (
          // pfp question
          <div
            key={index}
            className="py-6 px-4 bg-custom-half-gray border border-custom-half-gray rounded-lg space-y-2"
          >
            <Link
              to={`/question/${question._id}`}
              className="text-custom-primary hover:underline cursor-pointer"
            >
              <h5>{question.title}</h5>
            </Link>

            <div className="flex justify-between flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-1">
                <FaRegClock className="text-white" />
                <span>{formatRelativeTime(question.createdAt)}</span> {/* Relative time */}
              </div>

              <div className="flex gap-2">
                {question.tags.map((category, index) => (
                  <b
                    key={index}
                    className="px-3 py-1 bg-custom-primary hover:bg-custom-half-primary border border-custom-primary rounded-full shadow-sm transition"
                  >
                    {category}
                  </b>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PfpAllQuestion;
