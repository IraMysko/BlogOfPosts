import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://simple-blog-api.crew.red',
});

export default instanceAxios;