import React from 'react';
import useNormalAxios from '../../../Hooks/useNormalAxios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

const TopViewedQuestions = () => {
  const normalAxios = useNormalAxios()

  const fetchTopViewedQuestions= async() => {
      const params = {
          projection: JSON.stringify({title:1, views:1}), 
          sort: {views:-1},
          limit:5, 
      };
      const res=await normalAxios.get("/questions/questions", {params})
      return res.data
  };

  const { data:questions=[] } = useQuery(
      ['topViewedQuestions'],
      fetchTopViewedQuestions,
      {
        onError: (error) => {
          console.error(error);
        }
      }
  );

  return (
    <div className="p-4 bg-custom-primary rounded-lg shadow-md space-y-5">
      <h5 className="">
        Top 5 most viewed questions 
      </h5>

       
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={index} className="">
            <Link to={`/question/${question._id}`} className='hover:underline underline-offset-1 font-semibold'>{index+1}. {question.title}</Link>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default TopViewedQuestions;