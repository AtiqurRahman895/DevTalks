import AllQuestions from "./AllQuestions";

const Questions = () => {
    return (
        <main>
            <section className="py-16">
                <div className="container space-y-6">
                    <div className="flex items-center justify-between">
                        <h3>All Questions</h3>
                        <button className="outlineButton !py-3">
                            Ask a question
                        </button>
                    </div>

                    {/* <div className="join !items-center gap-3">
                        <input type="search" className="input bg-[rgba(71,71,71,0.4)] !border !border-Custom-Gray join-item !rounded-md" placeholder="Search a question" />
                        <button className="primaryButton !py-3">Search</button>
                    </div> */}

                    <div className="join !items-center">
                        <div>
                            <div>
                                <input type="search" className="input join-item bg-[rgba(71,71,71,0.4)] focus:!outline-offset-0 !rounded-r-none" placeholder="Search a question" />
                            </div>
                        </div>
                        <select className="select join-item bg-[rgba(71,71,71,0.4)] focus:!outline-none ">
                            <option disabled selected><b>Filter</b></option>
                            <option>Java</option>
                            <option>react</option>
                            <option>html</option>
                        </select>
                        <button className="join-item primaryButton !py-3 !rounded-l-none">Search</button>
                    </div>

                    <div className="w-full max-w-[580px]">
                        <AllQuestions />
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                        <button className="primaryButton">Previous</button>
                        <b className="">1 of 1</b>
                        <button className="primaryButton">Next</button>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Questions;