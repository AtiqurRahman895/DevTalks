import React from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import AskQuestionsForm from './AskQuestionsForm';

const AskQuestion = () => {
    return (
        <main>
            <PageTitle title="Ask question" />
            <section className="py-16">
                <div className="container space-y-6">

                    <h3>Ask a public question</h3>

                    <div className="w-full">
                        <AskQuestionsForm />
                    </div>


                </div>
            </section>
        </main>
    );
};

export default AskQuestion;