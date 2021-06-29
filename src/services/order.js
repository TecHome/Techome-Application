import BASE_ROUTE from './route';
import axios from 'axios';

function getOrders() {
  return axios.get(`${BASE_ROUTE}/orders`);
}

function getOrderById(id) {
  return axios.get(`${BASE_ROUTE}/orders/${id}`);
}

function createOrder(body){
    return axios.post(`${BASE_ROUTE}/orders`, body);
}

export { 
    getOrders, 
    getOrderById,
    createOrder
};
