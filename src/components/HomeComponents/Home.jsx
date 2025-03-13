import PageTitle from "../CommonComponents/PageTitle";
import Developer_Community from "./Developer_Community";
import Hero_section from "./Hero_section";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"/>
      <main>
       <Hero_section></Hero_section>
       <Developer_Community></Developer_Community>
      </main>
    </>
  );
};

export default Home;
