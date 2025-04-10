import React from 'react'
import PfpAnswerCard from './PfpAnswerCard';
import ProfileLoader from '../../CommonComponents/UserProfile/ProfileLoader';
import NothingProfile from '../../CommonComponents/UserProfile/NothingProfile';
import useUserData from '../../../Hooks/User Profile/useUserData';

const PfpAllAnswer = () => {

    const {data: answeredQuestions, isLoading: answerLoading} = useUserData("responses/response")

    if(answerLoading){
      return (
        <ProfileLoader />
      );
    }

    if (answeredQuestions?.length === 0) {
      return (
        <NothingProfile title="User has not answered any question yer" />
      );
    }
    
  return (
    <div className='grid gap-3'>
      {answeredQuestions.map(answer=><PfpAnswerCard key={answer._id} answer={answer} />)}
    </div>
  )
}

export default PfpAllAnswer
