import React, { useState, useEffect, useRef, useContext } from 'react';
import { toast } from 'react-toastify';
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


  if (!quizData || !quizData?.questions || quizData?.questions?.length === 0) {
    return (
      <div className="min-h-screen bg-black text-center text-lg text-white">
        No questions available.
      </div>
    );
  }

  const currentQuestion = quizData?.questions?.[currentQuestionIndex];
  const optionKeys = ['A', 'B', 'C', 'D'];

  return (
    <section className="pb-10">
      <div className="container">
        {quizCompleted ? (
            <QuizResult
              answers={answers}
              score={score}
            />
        ) : (
          <div className=" bg-custom-half-gray p-6 rounded-lg border border-custom-gray space-y-4">
            <h4 className="text-custom-primary">
              Question {String(currentQuestionIndex + 1).padStart(2, '0')}
            </h4>
            <h6 className="font-semibold">
              {currentQuestion?.question || 'No question available'}
            </h6>
            {currentQuestion?.code && (
              <div className="bg-custom-half-gray p-4 rounded-md border border-white">
                <pre>
                  <code ref={codeRef} className="">
                    {currentQuestion.code}
                  </code>
                </pre>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
              {optionKeys.map((key) =>
                currentQuestion?.options?.[key] ? (
                  <button
                    key={key}
                    onClick={() => handleOptionSelect(key)}
                    className={`relative w-full py-4 px-4 text-left rounded-md border transition-all ${
                      selectedOption === key ? "bg-custom-primary border-white":"bg-custom-half-gray border-custom-gray h-fit"
                    }`}
                    // disabled={isCorrect !== null}
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
              className={`w-full primaryButton flex items-center justify-center gap-2 ${
                !selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-custom-half-primary'
              }`}
            >
              {currentQuestionIndex < (quizData?.questions?.length || 0) - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizComponents;