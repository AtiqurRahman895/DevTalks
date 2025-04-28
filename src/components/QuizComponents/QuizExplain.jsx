import React from 'react';

const QuizExplain = ({ answers }) => {
  return (
    <div className="mt-10 bg-gray-900 p-6 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Quiz Review</h2>
      <div className="space-y-6">
        {answers?.map((answer, index) => (
          <div
            key={answer.questionId}
            className="bg-gray-800 p-4 rounded-lg border border-gray-600"
          >
            {/* Question Header */}
            <h3 className="text-lg font-semibold text-white mb-2">
              Question {index + 1}: {answer?.question || 'Question not available'}
            </h3>

            {/* User Answer and Correctness */}
            <div className="flex items-center gap-2 mb-2">
              <p className="text-gray-200">
                Your answer: <span className="font-semibold">{answer.userSelect}</span>
              </p>
              <span
                className={`text-xl ${
                  answer.isCorrect ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {answer.isCorrect ? '✔ Correct' : '✘ Incorrect'}
              </span>
            </div>

            {/* Explanation and Weak Point (only for incorrect answers) */}
            {!answer.isCorrect && (
              <div className="mt-2">
                <p className="text-gray-300">
                  <span className="font-semibold">Explanation: </span>
                  {answer.explanation}
                </p>
                <p className="text-gray-400 italic mt-1">
                  <span className="font-semibold">Common Mistake: </span>
                  {answer.weakPoint}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizExplain;
