import { useQuery } from "@tanstack/react-query";
import useNormalAxios from "./useNormalAxios";

const useGetQuestionsCount = (memorizedSearchQuery, memorizedTag) => {
    const normalAxios = useNormalAxios()

    const fetchQuestionsCount = async () => {
        const params = {
            query:
            memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {},
        };

        if (memorizedTag) {
            params.query.tags = { $in: [memorizedTag] }; 
        }

        const res = await normalAxios.get("/questions/questionsCount", { params });

        return res.data;
    };

    const { data: questionsCount = 0 } = useQuery(
        ["questionsCount", memorizedSearchQuery, memorizedTag],
        fetchQuestionsCount,
        {
            onError: (error) => {
              console.error("Error counting questions:", error);
            }
        }
    );
    return {questionsCount}
};

export default useGetQuestionsCount;