import axios from 'axios';

export type Project = {
  id?: number; // id may be optional when adding a new project
  project: string;
  image: string;
  description: string;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio');
  return response.data;
};

export const addProject = async (project: Project): Promise<Project> => {
  const response = await axios.post('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio', project);
  return response.data;
};
