import React, { useContext, useEffect, useState } from 'react'
import PfpAnswerCard from './PfpAnswerCard';
import { ProfileContext } from '../../../Provider/ProfileProvider';
import { secureAxios } from '../../../Hooks/useSecureAxios';
import Loading from '../../AuthenticationComponents/Loading';

const PfpAllAnswer = () => {

    const {userDetails} = useContext(ProfileContext);
  
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [loader, setLoader] = useState(false);
  
    useEffect(() => {
      const fetchAllAnswer = async () => {
        if (userDetails?.email) {
          try {
            setLoader(true)
            const res = await secureAxios.get(
              `/responses/response/${userDetails?.email}`
            );
            setAnsweredQuestions(res.data)
          } catch (error) {
            console.log(error);
          }
          finally{
            setLoader(false)
          }
        }
      };
  
      fetchAllAnswer();
    }, [userDetails?.email]);

    if(loader){
      return (
        <div className="flex items-start justify-center min-h-[200px] w-full rounded-lg shadow-md p-6">
          <Loading />
        </div>
      );
    }

    if (answeredQuestions.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[200px] w-full bg-custom-half-gray rounded-lg shadow-md p-6">
          <p className="text-lg font-bold text-custom-gray">
            User has not answered any questions yet.
          </p>
        </div>
      );
    }
    
  return (
    <div className='grid gap-3'>
      {answeredQuestions.map(answer=><PfpAnswerCard key={answer._id} answer={answer} />)}
    </div>
  )
}

export default PfpAllAnswer
