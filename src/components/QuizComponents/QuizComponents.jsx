import React, { useState, useEffect, useRef, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { AuthContext } from '../../Provider/AuthProvider';

const QuizComponents = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [showCheckAnswers, setShowCheckAnswers] = useState(false);
  const [scoreData, setScoreData] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const codeRef = useRef(null);
  const location = useLocation();
  const secureAxios = useSecureAxios();
  const { user } = useContext(AuthContext);

  // Get quiz data from location state
  useEffect(() => {
    const quizData = location.state?.quizData;
    if (quizData && quizData.questions) {
      setQuestions(quizData.questions);
    } else {
      toast.error('No quiz data available. Please create a quiz first.');
    }
  }, [location.state]);

  // Apply highlight.js to the code snippet
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [index, questions]);

  const handleInput = (e) => {
    setSelectedOption(e.target.value);
    setIsCorrect(null);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      return toast.error('Must select an option');
    }

    const correct = selectedOption === questions[index].correctAnswer;
    setIsCorrect(correct);
    // if (correct) {
    //   toast.success('Correct!');
    // } else {
    //   toast.error('Incorrect!');
    // }

    // Save the user's answer
    const newAnswer = {
      questionId: questions[index].id,
      userSelect: selectedOption,
    };
    setAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = newAnswer;
      return updatedAnswers;
    });

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex((prev) => prev + 1);
        setSelectedOption('');
        setIsCorrect(null);
      } else {
        setShowCheckAnswers(true);
      }
    }, 1000);
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      setSelectedOption(answers[index - 1]?.userSelect || '');
      setIsCorrect(null);
    }
  };

  const handleCheckAnswers = async () => {
    if (!user || !user.email) {
      toast.error('User not authenticated. Please log in.');
      return;
    }

    const quizId = location.state?.quizData?._id;
    if (!quizId) {
      toast.error('Quiz ID not found. Please create a quiz first.');
      return;
    }

    const payload = {
      email: user.email,
      quizId: quizId,
      userAnswers: answers,
    };

    try {
      const response = await secureAxios.post('/users/user-answer', payload);
      // console.log(response);
      setScoreData(response.data);
      setShowAnswers(true);
    } catch (error) {
      console.error('Error checking answers:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
      toast.error('Failed to check answers. Please try again.');
    }
  };

  const reset = () => {
    setIndex(0);
    setSelectedOption('');
    setIsCorrect(null);
    setAnswers([]);
    setShowCheckAnswers(false);
    setScoreData(null);
    setShowAnswers(false);
  };

  if (questions.length === 0) {
    return <div className="text-center text-lg text-white">No questions available.</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl p-8 mx-auto my-20 rounded-xl shadow-lg">
        {scoreData && !showAnswers ? (
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              Your Score: {scoreData.answers.score} / 5
            </p>
            <button
              onClick={() => setShowAnswers(true)}
              className="mt-4 w-36 h-10 text-lg bg-custom-primary text-white rounded-lg hover:bg-opacity-90"
            >
              View Answers
            </button>
          </div>
        ) : showAnswers ? (
          <div>
            <h2 className="text-2xl font-bold text-white text-center mb-6">Your Answers</h2>
            {scoreData?.answers?.answers?.map((answer, idx) => (
              <div key={answer.questionId} className="mb-6 p-4 bg-gray-800 rounded-md">
                <p className="text-lg text-white font-semibold">
                  {idx + 1}. {answer.question}
                </p>
                <p className="text-white mt-2">
                  <span className="font-medium">Your Answer:</span> {answer.userSelect} - {questions[idx].options[answer.userSelect]}
                </p>
                <p className={`text-white mt-1 ${answer.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  <span className="font-medium">
                    {answer.isCorrect ? 'Correct Answer:' : 'Correct Answer:'}
                  </span>{' '}
                  {answer.correctAnswer} - {questions[idx].options[answer.correctAnswer]}{' '}
                  {answer.isCorrect ? (
                    <span className="text-green-400">(Correct ✅)</span>
                  ) : (
                    <span className="text-red-400">(Incorrect ❌)</span>
                  )}
                </p>
                {answer.explanation && (
                  <p className="text-white mt-2">
                    <span className="font-medium">Explanation:</span> {answer.explanation}
                  </p>
                )}
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={reset}
                className="mt-4 w-36 h-10 text-lg bg-custom-primary text-white rounded-lg hover:bg-opacity-90"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-white">
                Question {index + 1}
              </h1>
              <p className="text-lg text-white mt-2">
                {questions[index].question}
              </p>
              {questions[index].code && (
                <div className="mt-4 bg-gray-900 p-4 rounded-md">
                  <pre>
                    <code ref={codeRef} className="language-html">
                      {questions[index].code}
                    </code>
                  </pre>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {['A', 'B', 'C', 'D'].map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-4 bg-gray-800 rounded-md cursor-pointer relative ${
                    selectedOption === option
                      ? isCorrect === true
                        ? 'bg-green-600'
                        : isCorrect === false
                        ? 'bg-red-600'
                        : 'bg-gray-700'
                      : 'bg-gray-800'
                  }`}
                >
                  <input
                    name="select"
                    type="radio"
                    value={option}
                    onChange={handleInput}
                    className="w-6 cursor-pointer"
                    checked={selectedOption === option}
                  />
                  <p className="ml-2 text-lg text-white">
                    {option}: {questions[index].options[option]}
                  </p>
                  {selectedOption === option && isCorrect === false && (
                    <span className="absolute right-4 text-2xl text-white">✖</span>
                  )}
                  {selectedOption === option && isCorrect === true && (
                    <span className="absolute right-4 text-2xl text-white">✔</span>
                  )}
                </label>
              ))}
            </div>

            <div className="text-center mt-6 flex justify-between">
              <button
                onClick={handlePrevious}
                className={`w-36 h-10 text-lg bg-indigo-600 text-white rounded-lg ${
                  index === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={index === 0 || showCheckAnswers}
              >
                Previous
              </button>

              {showCheckAnswers ? (
                <button
                  onClick={handleCheckAnswers}
                  className="w-36 h-10 text-lg bg-custom-primary text-white rounded-lg hover:bg-opacity-90"
                >
                  Check Answers
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-36 h-10 text-lg bg-indigo-600 text-white rounded-lg"
                >
                  {index === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default QuizComponents;