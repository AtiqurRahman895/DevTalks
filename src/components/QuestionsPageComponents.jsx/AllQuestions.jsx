import React from "react";
import QuestionCard from "../CommonComponents/QuestionCard";
import SectionBanner from "../CommonComponents/SectionBanner";

const allQuestions = [
  {
    id: 1,
    title: "How to optimize React performance?",
    user: "JohnDoe",
    time: "2 hours ago",
    categories: ["#react", "#performance"],
  },
  {
    id: 2,
    title: "What is the best state management tool?",
    user: "JaneSmith",
    time: "5 hours ago",
    categories: ["#redux", "#state-management"],
  },
  {
    id: 3,
    title: "Difference between useEffect and useLayoutEffect?",
    user: "DevGuru",
    time: "1 day ago",
    categories: ["#react", "#hooks"],
  },
  {
    id: 4,
    title: "How does React reconciliation work?",
    user: "AliceDev",
    time: "3 days ago",
    categories: ["#react", "#fiber"],
  },
  {
    id: 5,
    title: "Why use Tailwind CSS over traditional CSS?",
    user: "BobCoder",
    time: "5 days ago",
    categories: ["#tailwindcss", "#css"],
  },
  {
    id: 6,
    title: "Best practices for Next.js API routes?",
    user: "CharlieJS",
    time: "1 week ago",
    categories: ["#nextjs", "#api"],
  },
];

const AllQuestions = () => {
  return (
    <div className="space-y-4">
        <h5>4 questions</h5>

        <div className="space-y-6">
            {allQuestions.map((q,index) => (
                <QuestionCard key={index} question={q}/>
            ))}
        </div>
    </div>
  );
};

export default AllQuestions;