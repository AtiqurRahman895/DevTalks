import React from 'react';

const QuizExplain = ({ answers }) => {
  return (
    <div className="xs:mt-10 xs:bg-custom-half-gray px-2 py-6 xs:p-6 rounded-lg xs:border border-custom-gray space-y-6">
      <h3 className="text-center">Quiz Review</h3>
      
      <div className='space-y-6'>
        {answers?.map((answer, index) => (
          <div key={answer.questionId} className="bg-custom-half-gray p-4 rounded-md border border-custom-gray space-y-2">

              {/* Question Header */}
              <h5>
                Question {index + 1}: {answer?.question || 'Question not available'}
              </h5>

              {/* User Answer and Correctness */}
              <div className="flex items-center gap-2">
                <p className="">
                  Your answer: <span className="font-semibold">{answer.formattedUserSelect}</span>
                </p>
                <span
                  className={`xs:text-xl ${
                    answer.isCorrect ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {answer.isCorrect ? '✔Correct' : '✘Incorrect'}
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
        ))}
      </div>
    </div>
  );
};

export default QuizExplain;