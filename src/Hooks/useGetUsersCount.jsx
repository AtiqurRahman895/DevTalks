import { useQuery } from '@tanstack/react-query';
import useNormalAxios from './useNormalAxios';

const useGetUsersCount = (memorizedSearchQuery, memorizedRole) => {
    const normalAxios = useNormalAxios()

    const fetchUsersCount = async () => {
        const params = {
            query:
            memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {},
        };

        if (memorizedRole) {
            params.query.role = { $in: [memorizedRole] }; 
        }

        const res = await normalAxios.get("/users/usersCount", { params });

        return res.data;
    };

    const { data: usersCount = 0 } = useQuery(
        ["usersCount", memorizedSearchQuery, memorizedRole],
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