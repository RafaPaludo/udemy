import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Configuração global do Axios
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  config.headers.Authorization = `Bearer ${token}`;
 
  return config;
});

export default api;