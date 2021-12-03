import axios from 'axios';
const api = axios.create({baseURL: 'https://budget.tylers.com.br'});
// const api = axios.create({baseURL: 'http://10.0.0.104:2265'});
export default api;
