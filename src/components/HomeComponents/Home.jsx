import PageTitle from "../CommonComponents/PageTitle";
import Developer_Community from "./Developer_Community";
import Developer_Community_support from "./Developer_Community_support";
import Developer_Rating from "./Developer_Rating";
import Hero_section from "./Hero_section";
import Join_developer from "./Join_developer";
import LatestQuestionsAndNews from "./LatestQuestionsAndNews";


const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <main className="space-y-16">
        <Hero_section></Hero_section>
        <Developer_Community></Developer_Community>
        <LatestQuestionsAndNews />
        <Developer_Rating></Developer_Rating>
        <Developer_Community_support></Developer_Community_support>
        <Join_developer></Join_developer>
      </main>
    </>
  );
};

export default Home;
