import LatestNews from "./Latest-Components/LatestNews";
import LatestQuestions from "./Latest-Components/LatestQuestions";

const LatestQuestionsAndNews = () => {
    return (
            <section className="">
                <div className="container flex flex-col md:flex-row gap-x-8 gap-y-12">
                    <div className="w-full md:w-7/12 mx-auto">
                        <LatestQuestions />
                    </div>
                    <div className="w-full md:w-5/12 mx-auto">
                        <LatestNews />
                    </div>
                </div>
            </section>
    );
};

export default LatestQuestionsAndNews;