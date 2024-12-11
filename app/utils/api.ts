import axios from 'axios';

export type Project = {
  id: number;
  project: string;
  image: string;
  description: string;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio');
  return response.data;
};

export const addProject = async (project: Omit<Project, 'id'>): Promise<Project> => {
  const response = await axios.post('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio', project);
  return response.data;
};

export const deleteProject = async (id: number): Promise<void> => {
  await axios.delete(`https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio/${id}`);
};

export const updateProject = async (id: number, updatedProject: Partial<Project>): Promise<Project> => {
  const response = await axios.put(`https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio/${id}`, updatedProject);
  return response.data;
};