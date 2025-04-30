import { useQuery } from '@tanstack/react-query';
import useNormalAxios from './useNormalAxios';

const useGetUsersCount = (memorizedSearchQuery) => {
    const normalAxios = useNormalAxios()

    const fetchUsersCount = async () => {
        const params = {
            query:
            memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {},
        };

        const res = await normalAxios.get("/users/usersCount", { params });

        return res.data;
    };

    const { data: usersCount = 0 } = useQuery(
        ["usersCount", memorizedSearchQuery],
        fetchUsersCount,
        {
            onError: (error) => {
              console.error("Error counting users:", error);
            }
        }
    );
    return {usersCount}
};

export default useGetUsersCount;