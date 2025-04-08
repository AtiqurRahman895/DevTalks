import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { secureAxios } from "../../../Hooks/useSecureAxios";
import AuthProvider, { AuthContext } from "../../../Provider/AuthProvider";
import Loading from "../../AuthenticationComponents/Loading";

const PfpAllQuestion = () => {
  // const questions = [
  //   {
  //     title: "How to use React useEffect hook?",
  //     tags: ["React", "JavaScript", "Hooks"],
  //   },
  //   {
  //     title: "Best practices for JavaScript async/await",
  //     tags: ["JavaScript", "Async", "Promises"],
  //   },
  //   {
  //     title: "Understanding closures in JavaScript",
  //     tags: ["JavaScript", "Closures", "Functions"],
  //   },
  // ];
  const { user } = useContext(AuthContext);

  const [questions, setQuestions] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchAllQuestion = async () => {
      if (user?.email) {
        try {
          setLoader(true)
          const res = await secureAxios.get(
            `/questions/questions?email=${user?.email}`
          );
          console.log(res.data);
          setQuestions(res.data)
        } catch (error) {
          console.log(error);
        }
        finally{
          setLoader(false)
        }
      }
    };

    fetchAllQuestion();
  }, [user?.email]);

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px] w-full bg-custom-half-gray rounded-lg shadow-md p-6">
        <p className="text-lg font-bold text-custom-gray">
          User has not asked any questions yet.
        </p>
      </div>
    );
  }

  if(loader){
    return (
      <div className="flex items-center justify-center min-h-[200px] w-full rounded-lg shadow-md p-6">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid gap-4">
        {questions.map((question, index) => (
          // pfp question
          <div
            key={index}
            className="py-6 px-4 bg-custom-half-gray border border-custom-half-gray rounded-lg space-y-2"
          >
            <Link
              to="#"
              className="text-custom-primary hover:underline cursor-pointer"
            >
              <h5>{question.title}</h5>
            </Link>

            <div className="flex justify-between flex-wrap items-center gap-x-6 gap-y-3">
              <h6 className="text-custom-primary hover:underline cursor-pointer">
                View Details
              </h6>
              <div className="flex gap-2">
                {question.tags.map((category, index) => (
                  <b
                    key={index}
                    className="px-3 py-1 bg-custom-primary hover:bg-custom-half-primary border border-custom-primary rounded-full shadow-sm transition"
                  >
                    {category}
                  </b>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PfpAllQuestion;
