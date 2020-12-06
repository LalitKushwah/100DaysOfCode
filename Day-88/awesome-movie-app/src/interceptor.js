import axios from 'axios';

axios.interceptors.request.use(
    config => {
        // need to check by bearer is not working
        config.headers['Authorization'] = 'Bearer 04c35731a5ee918f014970082a0088b1';
        return config;
    },
    error => {
        Promise.reject(error);
    });
