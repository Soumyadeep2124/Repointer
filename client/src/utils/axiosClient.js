import axios from "axios"

const axiosClient =  axios.create({
    baseURL: 'https://repointer-server.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

