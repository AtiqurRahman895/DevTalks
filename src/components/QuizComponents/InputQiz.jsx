import React, { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSecureAxios from "../../Hooks/useSecureAxios";
import QuizComponents from "./QuizComponents";
import QuizResult from "./QuizResult";
import SectionBanner from "../CommonComponents/SectionBanner";
import { ProfileContext } from "../../Provider/ProfileProvider";

const CreateQuizPage = () => {
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const secureAxios = useSecureAxios();
  const { userDetails } = useContext(ProfileContext);

  console.log(userDetails?.email)
  const quizDate = userDetails?.answers?.quizDate;
  console.log(quizDate)
  useEffect(() => {
    if (quizDate) {
      const lastDate = new Date(quizDate);
      const now = new Date();
      const diffTime = now - lastDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const remaining = 7 - diffDays;

      if (remaining > 0) {
        setDaysRemaining(remaining);
      } else {
        setDaysRemaining(0);
      }
    }
  }, [quizDate, userDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!language || !difficulty) {
      toast.error("Please fill in both language and difficulty.");
      return;
    }

    if (!userDetails || !userDetails?.email) {
      toast.error("User not authenticated. Please log in.");
      return;
    }

    if (daysRemaining > 0) {
      toast.warning(`Please wait ${daysRemaining} day(s) before taking another quiz.`);
      return;
    }

    const payload = {
      topic: language,
      difficulty: difficulty,
      email: userDetails?.email,
    };

    setLoading(true);

    try {
      const response = await secureAxios.post("/quizzes/create-quiz", payload);
      toast.success("Quiz created successfully!");
      setQuizData(response.data);
    } catch (error) {
      console.error("Error creating quiz:", error.message);
      toast.error("Failed to create quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SectionBanner title="Quiz Page" />

      {quizData ? (
        <QuizComponents quizData={quizData} email={userDetails?.email} />
      ) : daysRemaining > 0 ? (
        <div className="p-8">
          <div className="flex justify-between items-center mb-6 mx-3">
            <h3 className="font-bold text-white">Your Previous Quiz Result</h3>
            <div className="bg-custom-primary text-white py-4 px-6 rounded-xl text-center shadow-lg">
              <p className="text-lg font-semibold">
                🚫 You can take a new quiz after{" "}
                <span className="font-bold text-lg underline">{daysRemaining}</span> day(s).
              </p>
            </div>
          </div>
          <QuizResult
            score={userDetails?.answers?.score}
            answers={userDetails?.answers?.answers}
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6">
          <div className="md:w-1/2 max-w-md mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Your Quiz</h2>
            <p className="text-gray-400 text-center mb-8">
              Select your language and difficulty level to start your custom quiz journey!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="language" className="block text-white text-sm font-medium mb-2">
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder="e.g., JavaScript, Python"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="difficulty" className="block text-white text-sm font-medium mb-2">
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  disabled={loading}
                >
                  <option value="">Select difficulty</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <button
                type="submit"
                className={`w-full h-12 text-lg bg-custom-primary transition-all ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Thinking..." : "Generate Quiz"}
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default CreateQuizPage;
