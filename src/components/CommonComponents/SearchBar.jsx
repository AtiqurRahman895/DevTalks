import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { useLocation, useNavigate } from "react-router";
import UseUrlQuery from "../../Hooks/UseUrlQuery";

const SearchBar = () => {
    const navigate =useNavigate()
    const {tag} = UseUrlQuery();
    const location = useLocation();
    const path = location.pathname;

    const [searchInput, setSearchInput]= useState("")
    const [filterTag, setFilterTag]= useState("")

    // const memorizedTag=useMemo(()=>tag,[tag])
    useEffect(()=>{
        setFilterTag(tag)
    },[tag])

    const filterOptions = [
        { label: "javascript", value: "javascript" },
        { label: "html", value: "html" },
        { label: "react", value: "react" },
        { label: "go", value: "go" },
    ];

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`?searchQuery=${searchInput}&page=1`);
        setFilterTag("")
        e.target.searchInput.blur();
    }

    const handleFilterChange=(e)=>{
        // setFilterTag(e.target.value)
        navigate(`?tag=${e.target.value}&page=1`);
        setSearchInput("")
        e.target.blur();

    }

    const handleAllButton=(e)=>{
        navigate(`?page=1`);
        setSearchInput("")
        e.target.blur();

    }

    return (
        <div className={`!items-center ${path=="/dashboard"?"flex justify-between":"join"}`}>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={e=>setSearchInput(e.target.value)} value={searchInput} name="searchInput" className={`input join-item bg-[rgba(71,71,71,0.4)] focus:!outline-none ${path!=="/dashboard"&&"!rounded-r-none"} placeholder:text-white placeholder:text-sm`} placeholder="Search.." />
            </form>

            {
                (path !== "/dashboard")?
                <select onChange={handleFilterChange} value={filterTag} name="filterTag" className="select join-item bg-[rgba(71,71,71,0.4)] focus:!outline-none ">
                    <option value="">Filter</option>
                    {
                        filterOptions.map((option,index)=>(
                            <option key={index} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
                :
                <button type="button" onClick={handleAllButton} className="btn bg-custom-primary hover:bg-custom-primary text-white join-item bg-[rgba(71,71,71,0.4)] focus:!outline-none ">See all</button>
            }
            
            {/* <button className="join-item primaryButton !px-2.5 !py-4 !rounded-l-none"> <ImSearch/> </button> */}
        </div>
    );
};

export default SearchBar;