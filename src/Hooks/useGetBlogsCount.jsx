import { useQuery } from '@tanstack/react-query';
import useNormalAxios from './useNormalAxios';

const useGetBlogsCount = (memorizedSearchQuery, memorizedTag) => {
    const normalAxios = useNormalAxios()

    const fetchBlogsCount = async () => {
        const params = {
            query:
            memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {},
        };

        if (memorizedTag) {
            params.query.tags = { $in: [memorizedTag] };
        }

        const res = await normalAxios.get("/blogs/blogsCount", { params });

        return res.data;
    };

    const { data: blogsCount = 0 } = useQuery(
        ["blogsCount", memorizedSearchQuery, memorizedTag],
        fetchBlogsCount,
        {
            onError: (error) => {
              console.error("Error counting blogs:", error);
            }
        }
    );
    return {blogsCount};
};

export default useGetBlogsCount;