import React from "react";
import QuestionCard from "../CommonComponents/QuestionCard";

const AllQuestions = ({questionsCount=0, allQuestions=[]}) => {
  return (
    <div className="space-y-4">
        <h5>{questionsCount} questions</h5>

        <div className="space-y-6">
            {allQuestions.map((question,index) => (
                <QuestionCard key={index} question={question}/>
            ))}
        </div>
    </div>
  );
};

export default AllQuestions;