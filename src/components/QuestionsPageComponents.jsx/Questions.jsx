import { Link } from "react-router";
import PageTitle from "../CommonComponents/PageTitle";
import NotFound from "../CommonComponents/NotFound";
import Loading from "../AuthenticationComponents/Loading"
import AllQuestions from "./AllQuestions";
import SearchBar from "./SearchBar";
import { useMemo } from "react";
import useNormalAxios from "../../Hooks/useNormalAxios";
import UseUrlQuery from "../../Hooks/UseUrlQuery";
import { useQuery } from "@tanstack/react-query";
import NextPreButtons from "../CommonComponents/NextPreButtons";

const Questions = () => {
    const limit = 6;
    const {searchQuery,tag,pageNo} = UseUrlQuery();
    const normalAxios = useNormalAxios()

    const memorizedSearchQuery=useMemo(()=> searchQuery,[searchQuery])
    const memorizedTag=useMemo(()=> tag,[tag])
    const memorizedPageNo=useMemo(()=> pageNo,[pageNo])

    const fetchQuestions= async() => {
        const params = {
            query:memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {}, 
            skip:memorizedPageNo == 1? 0: (memorizedPageNo-1)*limit, 
            limit, 
        };

        if (memorizedTag) {
            params.query.tags = { $in: [memorizedTag] };  // Use $in for exact matches or $text if you have a text index on `tags`
        }

        const res=await normalAxios.get("/questions/questions", {params})

        return res.data
    };

    const { isLoading:loading, data:questions=[], isError, error } = useQuery(
        ['questions', memorizedSearchQuery, memorizedPageNo, memorizedTag],
        fetchQuestions,
    );

    const fetchQuestionCount = async () => {
        const params = {
            query:
            memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {},
        };

        if (memorizedTag) {
            params.query.tags = { $in: [memorizedTag] };  // Use $in for exact matches or $text if you have a text index on `tags`
        }

        const res = await normalAxios.get("/questions/questionsCount", { params });

        return res.data;
    };

    const { data: questionsCount = 0 } = useQuery(
        ["questionsCount", memorizedSearchQuery, memorizedTag],
        fetchQuestionCount,
    );

    if (isError) {
        console.error(error);
    }


    return (
        <main>
            <PageTitle title="All questions" />
            <section className="py-16">
                <div className="container space-y-6">
                    <div className="flex items-center justify-between">
                        <h3>All Questions</h3>
                        <Link to={'/ask-question'} className="outlineButton !scale-100">
                            Ask a question
                        </Link>
                    </div>

                    <SearchBar />

                    {
                        loading?<Loading/>:
                        <>{
                            questions?.length===0?

                            <NotFound NotFoundText={searchQuery?"No question found!":"Unable to load questions for some reasion!"}/>:

                            <div className="w-full max-w-[580px]">
                                <AllQuestions questionsCount={questionsCount} allQuestions={questions} />
                            </div>
                        }</>
                    }



                    <div className="flex items-center gap-3 pt-3">
                        <NextPreButtons limit={limit} totalContents={questionsCount}/>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Questions;