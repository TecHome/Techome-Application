import BASE_ROUTE from './route';
import axios from 'axios';

function getItems() {
  return axios.get(`${BASE_ROUTE}/products`);
}

function getItemById(id) {
  return axios.get(`${BASE_ROUTE}/products/${id}`);
}

export { 
    getItems, 
    getItemById 
};
