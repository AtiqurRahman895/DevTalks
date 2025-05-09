import React, { useMemo } from 'react';
import useGetUsersCount from '../../../Hooks/useGetUsersCount';
import UseUrlQuery from '../../../Hooks/UseUrlQuery';
import { useQuery } from '@tanstack/react-query';
import useNormalAxios from '../../../Hooks/useNormalAxios';
import NextPreButtons from '../../CommonComponents/NextPreButtons';
import SearchBar from '../../CommonComponents/SearchBar';
import Loading from '../../AuthenticationComponents/Loading';

const AllUsersTable = () => {

  const limit = 6;
  const {searchQuery,pageNo} = UseUrlQuery();
  const normalAxios = useNormalAxios()

  const memorizedSearchQuery=useMemo(()=> searchQuery,[searchQuery])
  const memorizedPageNo=useMemo(()=> pageNo,[pageNo])

  const fetchUsers= async() => {
      const params = {
          query:memorizedSearchQuery ? { $text: { $search: memorizedSearchQuery } } : {}, 
          skip:memorizedPageNo == 1? 0: (memorizedPageNo-1)*limit, 
          sort: {_id:-1},
          limit, 
      };

      const res=await normalAxios.get("/users/users", {params})
      return res.data
  };

  const { isLoading:loading, data:users=[] } = useQuery(
      ['users', memorizedSearchQuery, memorizedPageNo],
      fetchUsers,
      {
          onError: (error) => {
            console.error("Error fetching users:", error);
          }
      }
  );

  const {usersCount} = useGetUsersCount(memorizedSearchQuery)

  return (
    <div className="p-4 bg-custom-half-gray rounded-lg shadow-md space-y-4">

      <SearchBar />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Users: {usersCount}</h2>
      </div>

      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          {/* Table Header */}
          <thead>
            <tr className="text-xs text-white uppercase">
              <th className="py-2 px-4">NO</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Email</th>
            </tr>
          </thead>

          {/* Table Body */}
          {
            loading ? <span className="loading loading-spinner loading-lg text-custom-primary mx-auto"></span> :
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-400">
                  <td className="py-3 px-4 text-sm text-white">{index+1}</td>
                  <td className="py-3 px-4 text-sm text-white">{user.name}</td>
                  <td className="py-3 px-4 text-sm text-white">{user.role}</td>
                  <td className="py-3 px-4 text-sm text-white">{user.email}</td>

                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>

      <div className="flex items-center gap-3">
          <NextPreButtons limit={limit} totalContents={usersCount}/>
      </div>
    </div>
  );
};

export default AllUsersTable;