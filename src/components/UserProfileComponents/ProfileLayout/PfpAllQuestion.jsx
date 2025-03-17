import React from "react";
import { Link } from "react-router";

const PfpAllQuestion = () => {
  const questions = [
    {
      title: "How to use React useEffect hook?",
      tags: ["React", "JavaScript", "Hooks"],
    },
    {
      title: "Best practices for JavaScript async/await",
      tags: ["JavaScript", "Async", "Promises"],
    },
    {
      title: "Understanding closures in JavaScript",
      tags: ["JavaScript", "Closures", "Functions"],
    },
  ];

  return (
    <div className="w-full">
      <div className="grid gap-4">
        {questions.map((question, index) => (
          // pfp question
          <div
            key={index}
            className="py-6 px-4 bg-Custom-half-Gray border border-Custom-half-Gray rounded-lg space-y-2"
          >
            <Link
              to="#"
              className="text-custom-primary hover:underline cursor-pointer"
            >
              <h5>{question.title}</h5>
            </Link>

            <div className="flex justify-between flex-wrap items-center gap-x-6 gap-y-3">
                <h6 className="text-custom-primary hover:underline cursor-pointer">View Details</h6>
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
