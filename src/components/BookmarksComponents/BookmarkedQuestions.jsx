import React from 'react';
import NotFound from '../CommonComponents/NotFound';
import QuestionCard from '../CommonComponents/QuestionCard';

const BookmarkedQuestions = ({questions=[]}) => {
    return (
        <>
        {
            questions?.length===0?
            <NotFound NotFoundText="No bookmark questions are found!"/>:

            <div className="space-y-4">
                <h5>{questions.length} questions</h5>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {questions.map((question,index) => (
                        <QuestionCard key={index} question={question}/>
                    ))}
                </div>
            </div>
        }
        </>
    );
};

export default BookmarkedQuestions;