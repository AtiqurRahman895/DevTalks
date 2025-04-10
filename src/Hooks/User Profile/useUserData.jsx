import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { ProfileContext } from '../../Provider/ProfileProvider';
import { secureAxios } from '../useSecureAxios';

const fetchUserData = async (apiUrl) => {

  const { data } = await secureAxios.get(`/${apiUrl}`);
  return data;
};

const useUserData = (basePath) => {


  const { userDetails } = useContext(ProfileContext);
  const email = userDetails?.email;
  const apiUrl = email ? `${basePath}?email=${email}` : null;



  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [basePath, email],
    queryFn: () => fetchUserData(apiUrl),
    enabled: !!email,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useUserData;
