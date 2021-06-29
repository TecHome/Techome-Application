import BASE_ROUTE from './route';
import axios from 'axios';

function getUsers() {
  return axios.get(`${BASE_ROUTE}/users`);
}

function getUserById(id) {
  return axios.get(`${BASE_ROUTE}/users/${id}`);
}

function createUser(body){
    return axios.post(`${BASE_ROUTE}/users`, body);
}

export { 
    getUsers, 
    getUserById,
    createUser
};
