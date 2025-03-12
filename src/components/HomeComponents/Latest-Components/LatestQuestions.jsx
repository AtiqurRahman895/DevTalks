import React from "react";

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
    <div className="p-8 bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-white">
        🚀 Latest Questions
      </h2>
      <div className="space-y-6">
        {latestQuestions.map((q) => (
          <div
            key={q.id}
            className="p-6 border-b  border-orange-600 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 hover:underline cursor-pointer">
              {q.title}
            </h3>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-3">
                👤 <span className="font-medium text-white">{q.user}</span> • ⏳
                {q.time}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {q.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs sm:text-sm md:text-base font-semibold bg-orange-600 text-white rounded-full shadow-sm hover:bg-orange-500 transition"
                  >
                    {category}
                  </span>
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
