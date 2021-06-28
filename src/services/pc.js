import BASE_ROUTE from './route';
import axios from 'axios';

function getPCs() {
  return axios.get(`${BASE_ROUTE}/pcs`);
}

function getPCById(id) {
  return axios.get(`${BASE_ROUTE}/pcs/${id}`);
}

export { 
    getPCs, 
    getPCById 
};
