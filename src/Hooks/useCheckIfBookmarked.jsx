import { useContext, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import useSecureAxios from "./useSecureAxios";

const useCheckIfBookmarked = (item, setBooked) => {
    const {user} = useContext(AuthContext)
    const secureAxios = useSecureAxios()
    const memorizedUser=useMemo(()=> user,[user])

    const checkIfBookmarked= async() => {
        if(!memorizedUser){
            setBooked(0)
            return 0
        }else{
            const res=await secureAxios.get(`/bookmarks/bookmark/${item}`)

            if(res.data){
                setBooked(1)
            console.log(res.data)

                return res.data
            }else{
                setBooked(0)
                return null
            }
        }
    };

    const { isLoading:loading, data:bookedItemInfo={}, refetch, isError, error } = useQuery(
        ['checkIfBookmarked', memorizedUser],
        checkIfBookmarked,
    );

    if (isError) {
        console.error(error);
    }
    
    return {loading, bookedItemInfo, refetch, isError, error}
};

export default useCheckIfBookmarked;
