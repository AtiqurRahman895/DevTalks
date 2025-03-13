import PageTitle from "../CommonComponents/PageTitle";
import LatestQuestionsAndNewsComponent from "./LatestQuestionsAndNewsComponent";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <main className="space-y-10">
        {/* hero */}
        {/* sections */}
        <LatestQuestionsAndNewsComponent/>
      </main>
    </>
  );
};

export default Home;
