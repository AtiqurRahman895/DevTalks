import PageTitle from "../CommonComponents/PageTitle";
import Developer_Community from "./Developer_Community";
import Hero_section from "./Hero_section";
import LatestQuestionsAndNewsComponent from "./LatestQuestionsAndNewsComponent";


const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <main className="space-y-10">
         <Hero_section></Hero_section>
         <Developer_Community></Developer_Community>
        <LatestQuestionsAndNewsComponent/>
      </main>
    </>
  );
};

export default Home;
