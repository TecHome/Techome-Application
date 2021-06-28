import BASE_ROUTE from './route';
import axios from 'axios';

function getProducts() {
  return axios.get(`${BASE_ROUTE}/peripherals`);
}

function getProductById(id) {
  return axios.get(`${BASE_ROUTE}/peripherals/${id}`);
}

export { 
    getProducts, 
    getProductById 
};
