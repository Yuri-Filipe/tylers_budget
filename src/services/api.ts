import axios from 'axios';
const api = axios.create({baseURL: 'https://budgetapp.tylers.com.br'});
export default api;
