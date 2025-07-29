import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://repointer.in',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

