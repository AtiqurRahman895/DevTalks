import React from "react";
import QuestionCard from "../../CommonComponents/QuestionCard";
import useNormalAxios from "../../../Hooks/useNormalAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../AuthenticationComponents/Loading";
import NotFound from "../../CommonComponents/NotFound";

const LatestQuestions = () => {
  const normalAxios = useNormalAxios()

  const fetchLatestQuestions= async() => {
      const params = {
          sort:{_id:-1}, 
          limit:5, 
      };

      const res=await normalAxios.get("/questions/questions", {params})
      return res.data
  };

  const { isLoading:loading, data:questions=[], isError, error } = useQuery(
      ['latestQuestions'],
      fetchLatestQuestions,
  );

  if (isError) {
    console.error(error);
  }

  return (
    <div className="space-y-6">
      <h3 className="">
        🚀 Latest Questions
      </h3>

      {
          loading?<Loading />:
          <>{
              questions?.length===0?

              <NotFound NotFoundText={"Unable to load questions for some reasion!"}/>:

              <div className="space-y-6">
                {questions.map((question,index) => (
                  <QuestionCard key={index} question={question}/>
                ))}
              </div>
          }</>
      }

    </div>
  );
};

export default LatestQuestions;
