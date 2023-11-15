import axios from 'axios';

export const API_URL = 'http://localhost:8000';

axios.defaults.baseURL = API_URL;


export function signInApi(data) {
    return axios.post('/signin', {
        username: data.email,
        password: data.password
    })
}


export function signUpApi(data) {
    return axios.post('/signup', {
        username: data.username,
        password: data.password,
        email: data.email,
    });
}


export function getCategoryApi() {
    return axios.get('/category')
}

export function getHeroApi() {
    return axios.get('/category')
}