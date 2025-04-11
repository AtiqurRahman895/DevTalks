import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
import axios from 'axios';

const QuizComponents = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const category = 'Code';
  const difficulty = 'easy';
  const limit = 10;

  
  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://dev-talks-server-blue.vercel.app/quizzes/api/quiz', {
        params: { category, difficulty, limit },
      });
      setQuestions(response.data);
    } catch (err) {
      console.error('Frontend error fetching questions:', err.message);
      if (err.response) {
        console.error('Response status:', err.response.status);
        console.error('Response data:', err.response.data);
      }
      setError('Failed to fetch quiz questions. Please try again.');
      toast.error('Failed to fetch quiz questions.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch questions when the component mounts
  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleInput = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      return toast.error('Must select an option');
    }

    if (selectedOption === questions[index].ans) {
      setScore((prev) => prev + 1);
     
    }  

    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      setSelectedOption('');
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
    fetchQuiz(); // Fetch new questions on reset
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
        <button
          onClick={fetchQuiz}
          className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="text-center text-lg">No questions available.</div>;
  }

  return (
    <div>
      <div className="text-center py-16 container bg-[#3f405a40] rounded-lg my-8">
        <h3 className="text-2xl font-bold text-white">Quiz</h3>
        <p className="md:w-2/4 sm:w-4/5 mx-auto leading-[17px] text-white">
          Challenge yourself with coding quizzes, improve problem-solving, and compete with the community to earn rewards!
        </p>
      </div>

      <div className="bg-[#3f405a40] max-w-3xl p-8 mx-auto my-20 rounded-xl shadow-lg">
        {showScore ? (
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={reset}
              className="mt-4 w-36 h-10 text-lg bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-white">
                Q: {questions[index].q}
              </h1>
            </div>

            <div className="mt-4">
              {['a', 'b', 'c', 'd'].map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    name="select"
                    type="radio"
                    onChange={handleInput}
                    className="w-6 cursor-pointer"
                    value={questions[index][option]}
                    checked={selectedOption === questions[index][option]}
                    required
                  />
                  <p className="ml-2 text-lg text-white">
                    {option.toUpperCase()} : {questions[index][option]}
                  </p>
                </label>
              ))}
            </div>

            <div className="text-center mt-6 flex justify-between">
              <button
                onClick={handlePrevious}
                className={`w-36 h-10 text-lg bg-indigo-600 text-white rounded-lg ${
                  index === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={index === 0}
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                className="w-36 h-10 text-lg bg-indigo-600 text-white rounded-lg"
              >
                {index === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuizComponents;