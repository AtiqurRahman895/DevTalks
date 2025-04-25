import React from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import { useLoaderData } from 'react-router';
import QuestionForm from '../AskQuestionComponents/QuestionForm';

const UpdateQuestion = () => {
    const questionData = useLoaderData()

    return (
        <main>
            <PageTitle title={`Update question: ${questionData.title}`}/>
            <section className="py-16">
                <div className="container space-y-6">
                    <h3>Update this question</h3>

                    <div className="w-full">
                        <QuestionForm defaultQuestionData={questionData} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UpdateQuestion;