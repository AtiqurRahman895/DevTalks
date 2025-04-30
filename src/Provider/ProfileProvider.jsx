/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react"; // Add useContext
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { normalAxios } from "../Hooks/useNormalAxios";
import { AuthContext } from "./AuthProvider";

// Create the UserContext
// eslint-disable-next-line react-refresh/only-export-components
export const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const {user} = useContext(AuthContext)
  // const { email:userEmail } = useParams();
  const userEmail = user?.email
  const [userDetails, setUserDetails] = useState(null);

  // Use TanStack Query to fetch user details
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["userDetails", userEmail],
    queryFn: async () => {
      if (!userEmail) {
        throw new Error("userName is required");
      }
      const res = await normalAxios.get(`/users/profile/${userEmail}`);
      return res.data;
    },
    enabled: !!userEmail,
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
