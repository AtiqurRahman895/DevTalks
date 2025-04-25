import LatestBlogs from "./Latest-Components/LatestBlogs";
import LatestQuestions from "./Latest-Components/LatestQuestions";

const LatestQuestionsAndBlogs = () => {
    return (
            <section className="">
                <div className="container flex flex-col md:flex-row gap-x-8 gap-y-12">
                    <div className="w-full md:w-7/12 mx-auto">
                        <LatestQuestions />
                    </div>
                    <div className="w-full md:w-5/12 mx-auto">
                        <LatestBlogs />
                    </div>
                </div>
            </section>
    );
};

export default LatestQuestionsAndBlogs;