import React from "react";

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
    <div className="p-8 bg-black rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 text-white">
        📰 Latest News
      </h2>
      <div className="space-y-6 bg-transparent rounded-lg p-6">
        {latestNews.map((news) => (
          <div
            key={news.id}
            className="p-6 border-l  border-orange-600 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 hover:underline cursor-pointer">
              {news.title}
            </h3>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-3">
                📖 <span className="font-medium text-white">{news.source}</span>
                • ⏳ {news.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
