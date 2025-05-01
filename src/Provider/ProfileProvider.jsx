import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { normalAxios } from "../Hooks/useNormalAxios";
import { AuthContext } from "./AuthProvider";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const { data={}, isLoading, error, refetch } = useQuery({
    queryKey: ["userProfile", email],
    queryFn: async () => {
      const res = await normalAxios.get(`/users/user/${email}`);
      return res.data;
    },
    enabled: !!email,
    onError: (err) => {
      console.error("Error fetching user details:", err);
    },
  });

  const value = {
    userDetails: data,
    loading: isLoading,
    error: error ? error.message : null,
    refetch,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};