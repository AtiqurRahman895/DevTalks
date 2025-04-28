import React from 'react';

const QuizExplain = ({ answers }) => {
  return (
    <div className="mt-10 bg-custom-half-gray p-6 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Quiz Review</h2>
      {/* Divider below header */}
      <div className="border-t border-gray-600 my-4 w-3/4 mx-auto"></div>
      
      <div>
        {answers?.map((answer, index) => (
          <React.Fragment key={answer.questionId}>
            {/* Question Card */}
            <div className="bg-custom-half-gray p-4 rounded-lg border border-gray-600">
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
                </div>
              )}
            </div>

            {/* Divider between question cards, except for the last one */}
            {index < answers.length - 1 && (
              <div className="border-t border-gray-600 my-6"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuizExplain;