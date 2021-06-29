import BASE_ROUTE from './route';
import axios from 'axios';

function getConsoles() {
    return axios.get(`${BASE_ROUTE}/consoles`);
}

function getConsolesById(id) {
    return axios.get(`${BASE_ROUTE}/consoles/${id}`);
}

export { 
    getConsoles, 
    getConsolesById 
};
