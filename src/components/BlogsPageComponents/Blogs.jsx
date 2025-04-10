import { Link } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";
import NotFound from "../CommonComponents/NotFound";
import Loading from "../AuthenticationComponents/Loading"
import SearchBar from "../CommonComponents/SearchBar";
import { useContext, useMemo } from "react";
import useNormalAxios from "../../Hooks/useNormalAxios";
import UseUrlQuery from "../../Hooks/UseUrlQuery";
import { useQuery } from "@tanstack/react-query";
import NextPreButtons from "../CommonComponents/NextPreButtons";
import { AuthContext } from "../../Provider/AuthProvider";
import AllBlogs from "./AllBlogs";

const Blogs = () => {
    const limit = 6;
    const {searchQuery,tag,pageNo} = UseUrlQuery();
    const normalAxios = useNormalAxios()
    const {user} = useContext(AuthContext)
    const role=localStorage.getItem("role")

    const memorizedSearchQuery=useMemo(()=> searchQuery,[searchQuery])
    const memorizedTag=useMemo(()=> tag,[tag])
    const memorizedPageNo=useMemo(()=> pageNo,[pageNo])

    const fetchBlogs= async() => {
        const params = {
            query:memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {}, 
            skip:memorizedPageNo == 1? 0: (memorizedPageNo-1)*limit, 
            limit, 
        };

        if (memorizedTag) {
            params.query.tags = { $in: [memorizedTag] };  // Use $in for exact matches or $text if you have a text index on `tags`
        }

        const res=await normalAxios.get("/blogs/blogs", {params})

        return res.data
    };

    const { isLoading:loading, data:blogs=[], isError, error } = useQuery(
        ['blogs', memorizedSearchQuery, memorizedPageNo, memorizedTag],
        fetchBlogs,
    );

    const fetchBlogsCount = async () => {
        const params = {
            query:
            memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {},
        };

        if (memorizedTag) {
            params.query.tags = { $in: [memorizedTag] };  // Use $in for exact matches or $text if you have a text index on `tags`
        }

        const res = await normalAxios.get("/blogs/blogsCount", { params });

        return res.data;
    };

    const { data: blogsCount = 0 } = useQuery(
        ["blogsCount", memorizedSearchQuery, memorizedTag],
        fetchBlogsCount,
    );

    if (isError) {
        console.error(error);
    }


    return (
        <main>
            <PageTitle title="All blogs" />
            <section className="py-16">
                <div className="container space-y-6">
                    <div className="flex items-center justify-between">
                        <h3>All Blogs</h3>
                        {
                            (user && role==="admin")&&
                            <Link to={'/add-blog'} className="outlineButton !scale-100">
                                Add a Blog
                            </Link>
                        }
                    </div>

                    <SearchBar />

                    {
                        loading?<Loading/>:
                        <>{
                            blogs?.length===0?

                            <NotFound NotFoundText={searchQuery?"No blog found!":"Unable to load blogs for some reasion!"}/>:

                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <AllBlogs blogsCount={blogsCount} allBlogs={blogs} />
                            </div>
                        }</>
                    }



                    <div className="flex items-center gap-3 pt-3">
                        <NextPreButtons limit={limit} totalContents={blogsCount}/>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Blogs;
