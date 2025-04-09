import React, { createContext, useState, useEffect } from "react";
import { normalAxios } from "../Hooks/useNormalAxios";
import { useParams } from "react-router";


// Create the UserContext
export const ProfileContext = createContext();

// Create a provider component
export const ProfileProvider = ({ children }) => {
  const { userName } = useParams();
//   console.log(userName)
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user details when userName changes
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (userName) {
        try {
          setLoading(true);
          setError(null);
          const res = await normalAxios.get(`/users/profile/${userName}`);
          setUserDetails(res.data);
        } catch (err) {
          console.error("Error fetching user details:", err);
          setError("Failed to fetch user details.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserDetails();
  }, [userName]);

  // Provide the context value
  const value = {
    userDetails,
    setUserDetails,
    loading,
    error,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
};

// // Custom hook to use the UserContext
// export const useProfile = () => {
//   const context = useContext(ProfileContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };