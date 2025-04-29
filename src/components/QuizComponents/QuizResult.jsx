import React, { useContext, useState } from "react";
import QuizExplain from "./QuizExplain";
import { AuthContext } from "../../Provider/AuthProvider";
import useSecureAxios from "../../Hooks/useSecureAxios";
import AISuggestion from "./AISuggestion";
import { FaCross, FaRobot } from "react-icons/fa";
import Loading from "../AuthenticationComponents/Loading";

// List of motivational quotes
const MOTIVATIONAL_QUOTES = [
  "Believe in yourself, and you can achieve anything!",
  "Every step forward is a step toward success!",
  "Keep trying, you're doing great!",
  "You’re stronger than you think—keep going!",
  "Mistakes are just steps to learning something new!",
];

const QuizResult = ({ score, quizData, answers }) => {
  const { user } = useContext(AuthContext);
  const [suggestion, setSuggestion] = useState(null);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [loading, setLoading] = useState(false);
  const secureAxios = useSecureAxios();

  const randomQuote =
    MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];

  // Calculate total questions
  const totalQuestions = quizData?.questions?.length || 0;

  // Determine circle color based on score (assuming totalQuestions is 5)
  const circleColor =
    totalQuestions === 5
      ? score >= 4
        ? "bg-green-600"
        : score === 3
        ? "bg-yellow-500"
        : "bg-red-600"
      : "bg-gray-600";

  const handleAiSuggestion = async () => {
    if (showSuggestion) {
      setShowSuggestion(false);
      return;
    }

    setLoading(true);
    try {
      const response = await secureAxios.post(`/users/user-feedback/${user?.email}`);
      setSuggestion(response.data);
      setShowSuggestion(true);
    } catch (error) {
      console.error("Failed to fetch AI suggestion:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[93%] mx-auto bg-custom-half-gray p-6 rounded-xl border border-gray-700">
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
      <p className="text-gray-400 italic text-center mb-6">"{randomQuote}"</p>

      {/* Quiz Explanation */}
      <QuizExplain answers={answers} />

      {/* Get AI Suggestion / Close Button */}
      <button
        onClick={handleAiSuggestion}
        className={`w-full h-12 text-lg bg-custom-primary text-white rounded-md hover:bg-custom-half-primary transition-all mt-10 flex items-center justify-center gap-2`}
        disabled={loading}
      >
        {loading ? (
          <Loading />
        ) : (
          <FaRobot className="text-xl" />
        )}
        {loading ? "Loading..." : showSuggestion ? "Close" : "Get AI Suggestion"}
      </button>

      {/* AI Suggestion Component */}
      {showSuggestion && suggestion && <AISuggestion suggestion={suggestion} />}
    </div>
  );
};

export default QuizResult;