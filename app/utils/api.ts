import axios from 'axios';

export const fetchProjects = async () => {
  const response = await axios.get('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio');
  return response.data;
};

export const addProject = async (project) => {
  const response = await axios.post('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio', project);
  return response.data;
};
