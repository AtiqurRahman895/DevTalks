import React from 'react';

// List of motivational quotes
const MOTIVATIONAL_QUOTES = [
  "Believe in yourself, and you can achieve anything!",
  "Every step forward is a step toward success!",
  "Keep trying, you're doing great!",
  "You’re stronger than you think—keep going!",
  "Mistakes are just steps to learning something new!",
];

const QuizResult = ({ score, quizData, handleReset, answers }) => {
  // Select a random motivational quote
  const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];

  // Calculate total questions
  const totalQuestions = quizData?.questions?.length || 0;

  // Determine circle color based on score (assuming totalQuestions is 5)
  const circleColor =
    totalQuestions === 5
      ? score >= 4
        ? 'bg-green-600'
        : score === 3
        ? 'bg-yellow-500'
        : 'bg-red-600'
      : 'bg-gray-600'; // Fallback color if totalQuestions is not 5

  return (
    <div className="w-[70%] max-w-4xl min-w-[600px] mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700">
      <div className="flex flex-col justify-center items-center">
        {/* Circular Badge with Score */}
        <div
          className={`w-44 h-44 rounded-full ${circleColor} flex items-center justify-center mb-4 border-2 border-gray-600`}
        >
          <p className="text-white text-xl font-bold">
            {score}/{totalQuestions}
          </p>
        </div>

        {/* Quiz Result Message */}
        <div className="text-center">
          <h4 className="font-bold text-white mb-2">Quiz Completed!</h4>
          <p className="text-gray-200 text-lg">
            Your score: {score}/{totalQuestions}
          </p>
        </div>
      </div>

      {/* Motivational Quote */}
      <p className="text-gray-400 italic text-center mb-6">
        "{randomQuote}"
      </p>

      {/* Try Again Button */}
      <QuizExplain answers={answers} />
    </div>
  );
};

export default QuizResult;