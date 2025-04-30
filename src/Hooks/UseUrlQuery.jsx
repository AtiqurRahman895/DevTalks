import { useLocation } from "react-router";

const UseUrlQuery = () => {
    const query = new URLSearchParams(useLocation().search);

    const searchQuery = query.get("searchQuery") || "";
    const tag = query.get("tag") || "";

    let pageNo =parseInt(query.get("page"),10);
    pageNo= isNaN(pageNo)?1:pageNo

    let sort = query.get("sort") || "None";


    return {searchQuery,tag,pageNo};
};

export default UseUrlQuery;