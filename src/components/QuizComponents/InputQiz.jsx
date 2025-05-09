import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import Quizzes from "./Quizzes";
import QuizResult from "./QuizResult";
import SectionBanner from "../CommonComponents/SectionBanner";
import { ProfileContext } from "../../Provider/ProfileProvider";
import { Link } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";

const CreateQuizPage = () => {
  const { userDetails, refetch } = useContext(ProfileContext);
  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const [newQuizData, setNewQuizData] = useState(null);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const secureAxios = useSecureAxios();
  const { user } = useContext(AuthContext);

  // console.log("userDerails: ",userDetails?.answers?.quizDate)
  const quizDate = userDetails?.answers?.quizDate;

  useEffect(() => {
    if (quizDate) {
      const lastDate = new Date(quizDate);
      const now = new Date();
      const diffTime = now - lastDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const remaining = 1 - diffDays;

      if (remaining > 0) {
        setDaysRemaining(remaining);
      } else {
        setDaysRemaining(0);
      }
    } else {
      setDaysRemaining(0);
    }
  }, [quizDate, userDetails]);

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

    if (daysRemaining) {
      toast.warning(
        `Please wait ${daysRemaining} day(s) before taking another quiz.`
      );
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
      // toast.success("Quiz created successfully!");
      setNewQuizData(response.data);
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
    <main className="space-y-10 min-h-dvh">
      <PageTitle title="Quiz" />
      <SectionBanner
        title={`${
          daysRemaining
            ? `Wait ${daysRemaining} Day for More Quiz!`
            : "Take Today's Quiz Challenge!"
        }`}
      />

      {!newQuizData ? (
        daysRemaining ? (
          <section className="pb-10">
            <div className="container">
              <div className=" flex justify-between items-center mb-6">
                <h4>Your Previous Quiz Result</h4>
                <Link
                  to={-1}
                  className="primaryButton hover:bg-custom-half-primary"
                >
                  Go Back
                </Link>
              </div>
              <QuizResult
                score={userDetails?.answers?.score}
                answers={userDetails?.answers?.answers}
              />
            </div>
          </section>
        ) : (
          <section className="pb-10">
            <div className="container">
              <div className="md:w-1/2 max-w-md mx-auto bg-custom-primary p-8 rounded-lg">
                <h3 className="text-center">Create Your Quiz</h3>
                <p className="text-center mb-8">
                  Select your language and difficulty level to start your custom
                  quiz journey!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <label className="space-y-1">
                    <span>Language</span>
                    <input
                      type="text"
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      placeholder="e.g., JavaScript, Python"
                      className="w-full p-2.5 bg-transparent rounded-md focus:outline-none border border-white placeholder:text-white"
                      disabled={loading}
                    />
                  </label>

                  <label className="space-y-1">
                    <span>Difficulty</span>
                    <select
                      id="difficulty"
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full ps-1 pe-2 py-2.5 bg-transparent rounded-md focus:outline-none border border-white"
                      disabled={loading}
                    >
                      <option value="">Select difficulty</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </label>

                  <button
                    type="submit"
                    className={`w-full mt-2 p-2 text-lg bg-white font-bold text-custom-primary transition-all rounded-md ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Thinking..." : "Generate Quiz"}
                  </button>
                </form>
              </div>
            </div>
          </section>
        )
      ) : (
        <Quizzes quizData={newQuizData} refetch={refetch} />
      )}
    </main>
  );
};

export default CreateQuizPage;
