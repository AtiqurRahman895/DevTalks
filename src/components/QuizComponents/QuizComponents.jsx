import React, { useState, useEffect, useRef, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';
import useSecureAxios from '../../Hooks/useSecureAxios';
import { AuthContext } from '../../Provider/AuthProvider';
import QuizResult from './QuizResult';
import { ProfileProvider } from '../../Provider/ProfileProvider';

const QuizComponents = ({ quizData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const codeRef = useRef(null);
  const secureAxios = useSecureAxios();
  const { user } = useContext(AuthContext);

  // Apply highlight.js to code snippets
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [currentQuestionIndex]);

  // Handle option selection
  const handleOptionSelect = (optionKey) => {
    setSelectedOption(optionKey);
    const currentQuestion = quizData?.questions?.[currentQuestionIndex];
    const correct = optionKey === currentQuestion?.correctAnswer;
    setIsCorrect(correct);
  };

  // Handle next question or quiz completion
  const handleNextQuestion = async () => {
    if (!selectedOption) {
      toast.error('Please select an option');
      return;
    }

    const currentQuestion = quizData?.questions?.[currentQuestionIndex];
    const isCorrectAnswer = selectedOption === currentQuestion?.correctAnswer;

    // Update score if correct
    if (isCorrectAnswer) {
      setScore((prev) => prev + 1);
    }

    // Format userSelect as "B. var"
    const optionText = currentQuestion?.options?.[selectedOption] || '';
    const formattedUserSelect = `${selectedOption}. ${optionText}`;

    // Save answer with formatted userSelect and question text
    const newAnswer = {
      questionId: currentQuestion?.id || currentQuestionIndex,
      question: currentQuestion?.question || '', // Add question text
      userSelect: formattedUserSelect, // e.g., "B. var"
      isCorrect: isCorrectAnswer,
      explanation: currentQuestion?.explanation,
      weakPoint: currentQuestion?.weakPoint,
    };
    setAnswers((prev) => [...prev, newAnswer]);

    // Move to next question or finish quiz
    if (currentQuestionIndex < (quizData?.questions?.length || 0) - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      }, 1000); // Delay to show feedback
    } else {
      // Submit answers to backend
      if (user?.email && quizData?._id) {
        const payload = {
          email: user.email,
          quizId: quizData._id,
          userAnswers: [...answers, newAnswer].map(answer => ({
            questionId: answer.questionId,
            question: answer.question, // Include question text
            userSelect: answer.userSelect, // Send "B. var"
          })),
        };

        try {
          await secureAxios.post('/users/user-answer', payload);
          toast.success(`Quiz completed! Your score: ${score + (isCorrectAnswer ? 1 : 0)}/${quizData?.questions?.length || 0}`);
        } catch (error) {
          // console.error('Error submitting answers:', error.message);
          toast.error(`Failed to submit answers. Please try again. Error submitting answers:', ${error.message}`);
        }
      } else {
        toast.error('User not authenticated or quiz ID missing.');
      }
      setQuizCompleted(true);
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
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  if (!quizData || !quizData?.questions || quizData?.questions?.length === 0) {
    return (
      <div className="min-h-screen bg-black text-center text-lg text-white">
        No questions available.
        <ToastContainer />
      </div>
    );
  }

  const currentQuestion = quizData?.questions?.[currentQuestionIndex];
  const optionKeys = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-black">
      {quizCompleted ? (
        <ProfileProvider>
          <QuizResult
            answers={answers}
            score={score}
            handleReset={handleReset}
          />
        </ProfileProvider>
      ) : (
        <div className="w-[90%] min-w-[600px] mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700">
          <h5 className="font-bold text-white mb-2">
            Question {String(currentQuestionIndex + 1).padStart(2, '0')}
          </h5>
          <p className="text-lg font-bold text-white uppercase mb-4">
            {currentQuestion?.question || 'No question available'}
          </p>
          {currentQuestion?.code && (
            <div className="mb-4 bg-gray-900 p-4 rounded-md border border-gray-700">
              <pre>
                <code ref={codeRef} className="language-javascript">
                  {currentQuestion.code}
                </code>
              </pre>
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            {optionKeys.map((key) =>
              currentQuestion?.options?.[key] ? (
                <button
                  key={key}
                  onClick={() => handleOptionSelect(key)}
                  className={`relative w-full py-4 px-4 text-left rounded-md border border-gray-600 transition-all ${
                    selectedOption === key && "bg-custom-primary"
                  }`}
                  disabled={isCorrect !== null}
                >
                  <span className="mr-2 font-semibold">{key}</span>
                  {currentQuestion.options[key]}
                </button>
              ) : null
            )}
          </div>
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className={`w-full mt-4 h-12 text-lg bg-custom-primary text-white rounded-md transition-all ${
              !selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-custom-half-primary'
            }`}
          >
            {currentQuestionIndex < (quizData?.questions?.length || 0) - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default QuizComponents;