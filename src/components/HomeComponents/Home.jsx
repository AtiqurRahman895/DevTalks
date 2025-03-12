import PageTitle from "../CommonComponents/PageTitle";
import LatestNews from "./Latest-Components/LatestNews";
import LatestQuestions from "./Latest-Components/LatestQuestions";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <main>
        {/* Latest Questions & News */}
        <section className="flex flex-col md:flex-row justify-between p-5 space-y-5 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-7/12 mx-auto">
            <LatestQuestions />
          </div>
          <div className="w-full md:w-5/12 mx-auto">
            <LatestNews />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
