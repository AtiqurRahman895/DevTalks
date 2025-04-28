import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import QuizComponents from "./QuizComponents";
import SectionBanner from "../CommonComponents/SectionBanner";

const CreateQuizPage = () => {
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const secureAxios = useSecureAxios();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!language || !difficulty) {
      toast.error("Please fill in both language and difficulty.");
      return;
    }

    if (!user || !user.email) {
      toast.error("User not authenticated. Please log in.");
      return;
    }

    const payload = {
      topic: language,
      difficulty: difficulty,
      email: user.email,
    };

    setLoading(true);

    try {
      const response = await secureAxios.post("/quizzes/create-quiz", payload);
      toast.success("Quiz created successfully!");
      setQuizData(response.data);
    } catch (error) {
      console.error("Error creating quiz:", error.message);
      if (error.response) {
        console.error("Response status:", error.response.status);
        console.error("Response data:", error.response.data);
      }
      toast.error("Failed to create quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">

      {/* Section Banner */}
      <SectionBanner title="Quiz Page" />
      {/* Form Section */}
    {!quizData ? (
      <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6">
          <div className="md:w-1/2 max-w-md mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Your Quiz</h2>
            <p className="text-gray-400 text-center mb-8">
              Select your language and difficulty level to start your custom quiz journey!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Language Input */}
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

              {/* Difficulty Select */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full h-12 text-lg bg-custom-primary transition-all ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Quiz"}
              </button>
            </form>
          </div>
      </div>
        ) : (
          <QuizComponents quizData={quizData} />
        )}

      <ToastContainer />
    </div>
  );
};

export default CreateQuizPage;