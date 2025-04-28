import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';

// List of motivational quotes
const MOTIVATIONAL_QUOTES = [
  "Believe in yourself, and you can achieve anything!",
  "Every step forward is a step toward success!",
  "Keep trying, you're doing great!",
  "You’re stronger than you think—keep going!",
  "Mistakes are just steps to learning something new!",
];

const QuizResult = ({score, quizData, handleReset}) => {

  const {user} = useContext(AuthContext);
  console.log(user)

   // Select a random motivational quote
   const randomQuote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];

  return (
    <div className="w-[70%] max-w-5xl min-w-[600px] mx-auto bg-gray-900 p-6 rounded-xl border border-gray-700 text-center">
      {/* <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6"> */}
        {/* Left Side: User Profile Photo and Name */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-600 mb-2 object-cover"
          />
          <h3 className="text-lg font-semibold text-white text-center">
            {user?.displayName || 'User'}
          </h3>
        </div>



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

