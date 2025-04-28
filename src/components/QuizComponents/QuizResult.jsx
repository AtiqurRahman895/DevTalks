import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';

const QuizResult = ({score, quizData, handleReset}) => {

  const {user} = useContext(AuthContext);
  console.log(user)

  return (
    <div className="w-[70%] max-w-5xl min-w-[600px] mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
    <h2 className="text-2xl font-bold text-white mb-4">Quiz Completed!</h2>
    <p className="text-gray-200 mb-4">
      Your score: {score}/{quizData?.questions?.length || 0}
    </p>
    <button
      onClick={handleReset}
      className="w-full h-12 text-lg bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-all"
    >
      Try Again
    </button>
  </div>
  )
}

export default QuizResult;

