import axios from 'axios';

const axiosOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

const Axios = axios.create(axiosOptions);

export default Axios;
