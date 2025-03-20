import React from 'react';
import PageTitle from '../CommonComponents/PageTitle';
import QuestionsForm from './QuestionsForm';

const AskQuestion = () => {
    return (
        <main>
            <PageTitle title="Ask question" />
            <section className="py-16">
                <div className="container space-y-6">

                    <h3>Ask a public question</h3>

                    <div className="w-full">
                        <QuestionsForm />
                    </div>


                </div>
            </section>
        </main>
    );
};

export default AskQuestion;