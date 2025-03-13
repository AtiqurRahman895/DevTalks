import React from "react";
import { Link } from "react-router";

const latestQuestions = [
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
  {
    id: 7,
    title: "How to implement authentication in MERN stack?",
    user: "DavidStack",
    time: "2 weeks ago",
    categories: ["#mern", "#authentication"],
  },
];

const LatestQuestions = () => {
  return (
    <div className="space-y-6">
      <h3 className="">
        🚀 Latest Questions
      </h3>
      <div className="space-y-6">
        {latestQuestions.map((q) => (
            <div key={q.id} className="py-6 px-4 bg-Custom-half-Gray border border-Custom-half-Gray rounded-lg space-y-2">

              <Link to="#" className="text-custom-primary hover:underline cursor-pointer">
                <h5>{q.title}</h5>
              </Link>

              <div className="flex justify-between flex-wrap items-center gap-x-6 gap-y-3">

                <div className="text-Custom-Gray flex gap-2">
                  <b className="">👤 {q.user}</b> 
                  <span>⏳{q.time}</span>
                </div>

                <div className="flex gap-2">
                  {q.categories.map((category, index) => (
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

export default LatestQuestions;
