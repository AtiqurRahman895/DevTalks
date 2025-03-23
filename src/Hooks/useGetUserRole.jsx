import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { normalAxios } from "./useNormalAxios";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const useGetUserRole = () => {
    const { signOutUser, user, loading: userLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    // Validate role to ensure it matches expected values
    const validateRole = (role) => {
        const validRoles = ["admin", "user", "guest"];
        return validRoles.includes(role) ? role : "guest";
    };

    // Fetch user role from the server
    const fetchUserRole = async () => {
        let role = localStorage.getItem("role") || "guest";

        // If user data is still loading, return the cached role
        if (userLoading) {
            return validateRole(role);
        }

        // If user is not authenticated, set role to "guest"
        if (!user?.email || !token) {
            localStorage.setItem("role", "guest");
            return "guest";
        }

        try {
            // Optional: Refresh token if expired
            // const isTokenValid = checkTokenValidity(token); // Implement this
            // if (!isTokenValid) {
            //     const newToken = await refreshToken(); // Implement this
            //     localStorage.setItem("token", newToken);
            // }

            // Fetch role from the server
            const res = await normalAxios.get(`users/user/${user.email}`, {
                headers: {
                    token: `Bearer ${token}`,
                    email: user.email,
                },
            });

            if (res.data?.role) {
                // const validatedRole = validateRole(res.data.role); // Validate the role
                localStorage.setItem("role", res.data.role);
                return res.data.role;
            } else {
                // If no role is returned, log out the user and set role to "guest"
                signOutUser();
                navigate("/sign-in");
                localStorage.setItem("role", "guest");
                return "guest"; // Fallback role
            }
        } catch (error) {
            // Handle unauthorized access
            if (error.response?.status === 401 || error.response?.status === 403) {
                signOutUser();
                toast.error(error.response?.data?.message || "Unauthorized access. Please log in again.");
                localStorage.setItem("role", "guest");
                navigate("/sign-in");
            } else {
                // Handle other errors
                toast.error("An error occurred while fetching your role. Please try again.");
            }
            throw error; // Let React Query handle the error
        }
    };

    // React Query to fetch and cache the role
    const {
        isLoading: loading,
        isInitialLoading,
        data: role = "guest",
        refetch,
        isError,
        error,
    } = useQuery(
        ["userRole", user?.email],
        fetchUserRole,
        {
            enabled: !userLoading, // Prevent fetching when user is still loading
            retry: false, // Avoid retrying if unauthorized
            onError: (error) => {
                console.error("Error fetching user role:", error);
            },
            // staleTime: 1000 * 60 * 5, // Cache the role for 5 minutes
        }
    );

    return { loading, isInitialLoading, role, refetch, isError, error };
};

export default useGetUserRole;