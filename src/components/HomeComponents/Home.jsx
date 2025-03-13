import PageTitle from "../CommonComponents/PageTitle";
import Developer_Community from "./Developer_Community";
import Developer_Community_support from "./Developer_Community_support";
import Developer_Rating from "./Developer_Rating";
import Hero_section from "./Hero_section";
import LatestQuestionsAndNewsComponent from "./LatestQuestionsAndNewsComponent";


const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <main className="space-y-10">
        <Hero_section></Hero_section>
        <Developer_Community></Developer_Community>
        <LatestQuestionsAndNewsComponent />
        <Developer_Community_support></Developer_Community_support>
        <Developer_Rating></Developer_Rating>
      </main>
    </>
  );
};

export default Home;
