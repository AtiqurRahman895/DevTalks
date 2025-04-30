import axios from "axios";

export const normalAxios = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://dev-talks-server-blue.vercel.app',

});


const useNormalAxios = () => {
    return normalAxios
};

export default useNormalAxios;