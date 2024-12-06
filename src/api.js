import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:6000/api' });

export const fetchProjects = () => API.get('/projects');
export const createProject = (data) => API.post('/projects', data);
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
