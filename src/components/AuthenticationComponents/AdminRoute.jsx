import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "./Loading";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

const AdminRoute = ({children}) => {
    const {user,loading,signOutUser}=useContext(AuthContext)
    const role=localStorage.getItem("role")

    useEffect(() => {
        if (user && role && role !== "admin") {
          signOutUser();
          toast.error("You are not authorized to enter this page!");
        }
      }, [user, role, signOutUser]);
    
      if (loading) {
        return <Loading />;
      }
    
      if (user && role === "admin") {
        return children;
      }
    return <Navigate to={"/sign-in"}></Navigate>
};

export default AdminRoute;