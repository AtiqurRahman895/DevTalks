import { useEffect } from "react";
import useNormalAxios from "./useNormalAxios";

const useUpdateViews = (_id, refetch, type) => {
    const normalAxios = useNormalAxios()

    const updateQuestionViews= async()=>{
        try {
            await normalAxios.put(`/questions/updateQuestionViews/${_id}`)
            localStorage.setItem(_id, 'true');
            refetch()
        } catch (error) {
            console.error('Failed to track question view:', error);
        }
    }

    const updateBlogViews= async()=>{
        try {
            await normalAxios.put(`/blogs/updateBlogViews/${_id}`)
            localStorage.setItem(_id, 'true');
            refetch()
        } catch (error) {
            console.error('Failed to track blog view:', error);
        }
    }

    useEffect(() => {
        const alreadyViewed = localStorage.getItem(_id);
    
        if (!alreadyViewed) {
            if(type==="question"){
                updateQuestionViews()
            }else if(type==="blog"){
                updateBlogViews()
            }
        }
      }, [_id, refetch, normalAxios]);
};

export default useUpdateViews;