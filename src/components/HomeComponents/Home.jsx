import { useContext } from "react";
import PageTitle from "../CommonComponents/PageTitle";
import Developer_Community from "./Developer_Community";
import Developer_Community_support from "./Developer_Community_support";
import Developer_Rating from "./Developer_Rating";
import Hero_section from "./Hero_section";
import Join_developer from "./Join_developer";
import LatestQuestionsAndBlogs from "./LatestQuestionsAndBlogs";
import { AuthContext } from "../../Provider/AuthProvider";


const Home = () => {
  const {user}=useContext(AuthContext)
  return (
    <>
      <PageTitle title="Home" />
      <main className="space-y-16">
        <Hero_section user={user} ></Hero_section>
        <Developer_Community user={user} ></Developer_Community>
        <LatestQuestionsAndBlogs />
        <Developer_Rating></Developer_Rating>
        <Developer_Community_support></Developer_Community_support>
        <Join_developer user={user} ></Join_developer>
      </main>
    </>
  );
};

export default Home;
