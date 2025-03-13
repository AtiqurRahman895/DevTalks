import PageTitle from "../CommonComponents/PageTitle";
<<<<<<< HEAD
import Hero_section from "./Hero_section";
=======
import Developer_Community from "./Developer_Community";
import Hero_section from "./Hero_section";
import LatestQuestionsAndNewsComponent from "./LatestQuestionsAndNewsComponent";

>>>>>>> a7c73fc840fb15a1b950bc81f08a125cc638521b

const Home = () => {
  return (
    <>
<<<<<<< HEAD
      <PageTitle title="Home"/>
      <main>
         <Hero_section></Hero_section>
=======
      <PageTitle title="Home" />
      <main className="space-y-10">
        <Hero_section></Hero_section>
        <Developer_Community></Developer_Community>
        <LatestQuestionsAndNewsComponent/>
>>>>>>> a7c73fc840fb15a1b950bc81f08a125cc638521b
      </main>
    </>
  );
};

export default Home;
