/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react"; // Add useContext
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { normalAxios } from "../Hooks/useNormalAxios";

// Create the UserContext
export const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const { userName } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  // Use TanStack Query to fetch user details
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["userDetails", userName],
    queryFn: async () => {
      if (!userName) {
        throw new Error("userName is required");
      }
      const res = await normalAxios.get(`/users/profile/${userName}`);
      return res.data;
    },
    enabled: !!userName,
    onSuccess: (data) => {
      setUserDetails(data);
    },
    onError: (err) => {
      console.error("Error fetching user details:", err);
    },
  });

  // Provide the context value
  const value = {
    userDetails,
    setUserDetails,
    loading: isLoading,
    error: error ? "Failed to fetch user details." : null,
    refetch
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};
