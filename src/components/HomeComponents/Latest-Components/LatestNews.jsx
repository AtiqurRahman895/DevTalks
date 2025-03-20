import React from "react";
import { Link } from "react-router";

const LatestNews = () => {
  const latestNews = [
    {
      id: 1,
      title: "React 19 is coming soon!",
      source: "React Blog",
      time: "3 hours ago",
    },
    {
      id: 2,
      title: "Tailwind CSS v4 released!",
      source: "Tailwind Blog",
      time: "8 hours ago",
    },
    {
      id: 3,
      title: "Next.js 15 - What’s new?",
      source: "Vercel",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "JavaScript ES2025 features leaked!",
      source: "JS Weekly",
      time: "2 days ago",
    },
    {
      id: 5,
      title: "New security updates in Node.js",
      source: "Node Blog",
      time: "4 days ago",
    },
    {
      id: 6,
      title: "Best UI trends for 2025",
      source: "Design Hub",
      time: "6 days ago",
    },
    {
      id: 7,
      title: "The future of AI in web development",
      source: "AI Dev Journal",
      time: "1 week ago",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="">
        📰 Latest News
      </h3>
      <div className="space-y-6 bg-custom-half-gray border border-custom-half-gray rounded-lg p-6">
        {latestNews.map((news) => (
          <div
            key={news.id}
            className="py-6 px-4 bg-[linear-gradient(175deg,rgba(0,0,0,1)0%,rgba(55,55,55,.3)75%);] border border-custom-half-gray rounded-lg space-y-2"
          >
            <Link to="#" className="text-custom-primary hover:underline cursor-pointer">
              <h5>{news.title}</h5>
            </Link>

            <div className="text-custom-gray flex flex-wrap gap-2">
              <b className="">📖 {news.source}</b> 
              <span>⏳{news.time}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
