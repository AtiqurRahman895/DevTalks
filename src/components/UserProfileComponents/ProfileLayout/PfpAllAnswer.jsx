import React, { useContext, useEffect, useState } from 'react'
import PfpAnswerCard from './PfpAnswerCard';
import { ProfileContext } from '../../../Provider/ProfileProvider';
import { secureAxios } from '../../../Hooks/useSecureAxios';

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
            console.log(res.data);
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
    
  return (
    <div className='grid gap-3'>
      {answeredQuestions.map(answer=><PfpAnswerCard key={answer._id} answer={answer} />)}
    </div>
  )
}

export default PfpAllAnswer
