import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://www.repointer.in',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

