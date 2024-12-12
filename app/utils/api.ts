import axios from 'axios';

export type Project = {
  id: number;
  project: string;
  image: string;
  description: string;
};

// Fetch all projects (calls /api/portfolio, which in turn calls mockapi.io)
export const fetchProjects = async (): Promise<Project[]> => {
  const response = await axios.get('/api/portfolio');
  return response.data;
};

// Add a new project
export const addProject = async (project: Omit<Project, 'id'>): Promise<Project> => {
  const response = await axios.post('/api/portfolio', project);
  return response.data;
};

// Delete a project
export const deleteProject = async (id: number): Promise<void> => {
  await axios.delete('/api/portfolio', { data: { id } });
};

// Update a project
export const updateProject = async (id: number, updatedProject: Partial<Project>): Promise<Project> => {
  const response = await axios.put('/api/portfolio', { id, ...updatedProject });
  return response.data;
};
