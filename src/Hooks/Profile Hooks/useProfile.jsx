import { useState } from "react";
import { toast } from "react-toastify";


const useProfile = (cb) => {
    console.log(cb)
   const [data, setData] = useState(undefined);
       const [loader, setLoader] = useState(null);
       const [error, setError] = useState(null);
   
       const fn = async (...args) => {
           setLoader(true);
           setError(null);
           try {
               const response = await cb(...args);
               setData(response);
               setError(null);
           } catch (error) {
               setError(error)
               toast.error(error.message);
           }
           finally{
               setLoader(false);
           }
       }
       return{data, loader, error, fn, setData};
}

export default useProfile
// normalAxios.get(`/users/profile/${userName}`);