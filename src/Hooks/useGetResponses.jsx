import { useMemo } from "react";
import { normalAxios } from "./useNormalAxios";
import { useQuery } from "@tanstack/react-query";

const useGetResponses = (responseTo) => {
    const memorizedResponseTo=useMemo(()=> responseTo,[responseTo])

    const fetchResponses= async() => {
        const params = {
            query:{responseTo:memorizedResponseTo}, 
            sort:{_id:-1}
        };
        const res=await normalAxios.get("/responses/responses", {params})

        return res.data
    };

    const { isLoading:loading, data:responses=[], refetch, isError, error } = useQuery(
        ['responses', memorizedResponseTo],
        fetchResponses,
        {
            enabled: !!memorizedResponseTo,
        }
    );

    if (isError) {
        console.error(error);
    }
    
    return {loading, responses, refetch, isError, error}
};

export default useGetResponses;