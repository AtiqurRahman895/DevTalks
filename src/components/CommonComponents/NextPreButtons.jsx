import { useEffect, useMemo, useState } from "react";
import UseUrlQuery from "../../Hooks/UseUrlQuery";
import { useNavigate } from "react-router";

const NextPreButtons = ({limit,totalContents}) => {
  const navigate =useNavigate()  
  const {searchQuery,tag,pageNo} = UseUrlQuery();
  const [maxPage,setMaxtPage] = useState()

  useMemo(()=>{
    setMaxtPage(Math.ceil(totalContents/limit)||1)
  },[totalContents,limit])

  const handlePreButton=()=>{
    if(searchQuery){
        navigate(`?searchQuery=${searchQuery}&page=${pageNo-1}`);
    }else if(tag){
        navigate(`?tag=${searchQuery}&page=${pageNo-1}`);
    }else{
        navigate(`?page=${pageNo-1}`);
    }
  }
  
  const handleNextButton=()=>{
    if(searchQuery){
        navigate(`?searchQuery=${searchQuery}&page=${pageNo+1}`);
    }else if(tag){
        navigate(`?tag=${searchQuery}&page=${pageNo+1}`);
    }else{
        navigate(`?page=${pageNo+1}`);
    }
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {

        window.scrollTo(0,0)
      
    }, 200); 
    return () => clearTimeout(timer); // Cleanup the timeout
  }, [searchQuery, pageNo]);

  if(totalContents){
    return (
      <>
          <button type="button" onClick={handlePreButton} disabled={pageNo<=1} className={`${pageNo<=1?"opacity-50 cursor-not-allowed":""} primaryButton !px-4 !py-2`}>
              Previous
          </button>
          <b className="">{pageNo} of {maxPage}</b>
          <button type="button" onClick={handleNextButton} disabled={pageNo>=maxPage} className={`${pageNo>=maxPage?"opacity-50 cursor-not-allowed":""} primaryButton !px-4 !py-2`}>
              Next
          </button>
      </>
  );
  }
};

export default NextPreButtons;