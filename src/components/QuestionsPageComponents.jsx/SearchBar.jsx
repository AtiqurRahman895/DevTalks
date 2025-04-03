import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const navigate =useNavigate()

    const [searchInput, setSearchInput]= useState("")
    const [filterTag, setFilterTag]= useState("")

    const filterOptions = [
        { label: "javascript", value: "javascript" },
        { label: "html", value: "html" },
        { label: "react", value: "react" }
    ];

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`?searchQuery=${searchInput}&page=1`);
        setFilterTag("")
        e.target.searchInput.blur();
    }

    const handleFilterChange=(e)=>{
        setFilterTag(e.target.value)
        navigate(`?tag=${e.target.value}&page=1`);
        setSearchInput("")
        e.target.blur();

    }

    return (
        <div className="join !items-center">
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={e=>setSearchInput(e.target.value)} value={searchInput} name="searchInput" className="input join-item bg-[rgba(71,71,71,0.4)] focus:!outline-none !rounded-r-none placeholder:text-white placeholder:text-sm" placeholder="Search a question" />
            </form>
            <select onChange={handleFilterChange} value={filterTag} name="filterTag" className="select join-item bg-[rgba(71,71,71,0.4)] focus:!outline-none ">
                <option value="">Filter</option>
                {
                    filterOptions.map((option,index)=>(
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
            
            {/* <button className="join-item primaryButton !px-2.5 !py-4 !rounded-l-none"> <ImSearch/> </button> */}
        </div>
    );
};

export default SearchBar;