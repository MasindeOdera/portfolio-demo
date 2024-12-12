'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import ProjectCard from "./../components/ProjectCard";
import DeleteModal from "./../components/DeleteModal";
import EditModal from "./../components/EditModal";
import AddModal from "../components/AddModal";
import { fetchProjects, deleteProject, updateProject, addProject } from "./../utils/api";

type Project = {
  id: number;
  project: string;
  image: string;
  description: string;
};

const AdminDashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  
  &:hover {
    opacity: 0.9;
  }
`;

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const handleAdd = async (newProject: Omit<Project, 'id'>) => {
    const createdProject = await addProject(newProject);
    setProjects((prevProjects) => [...prevProjects, createdProject]);
    setIsAddModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    await deleteProject(id);
    setProjects(projects.filter((project) => project.id !== id));
    setIsDeleteModalOpen(false);
  };

  const handleEdit = async (updatedProject: Project) => {
    const updated = await updateProject(updatedProject.id, updatedProject);
    setProjects(projects.map((project) => (project.id === updated.id ? updated : project)));
    setIsEditModalOpen(false);
  };

  return (
    <div  style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Admin Dashboard</h1>
      <p>Manage your portfolio projects from here.</p>
      <p>Select the appropriate icon, located on the top right, to edit or delete.</p>

      <AddButton onClick={() => setIsAddModalOpen(true)}>Add a Project?</AddButton>

      <AdminDashboardContainer>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.project} 
            description={project.description} 
            imageUrl={project.image} 
            onDelete={() => {
              setSelectedProject(project);
              setIsDeleteModalOpen(true);
            }}
            onEdit={() => {
              setSelectedProject(project);
              setIsEditModalOpen(true);
            }}
            isAdmin={true}
          />
        ))}
      </AdminDashboardContainer>

      {isAddModalOpen && (
        <AddModal 
          onCancel={() => setIsAddModalOpen(false)} 
          onAdd={handleAdd} 
        />
      )}

      {isDeleteModalOpen && selectedProject && (
        <DeleteModal 
          projectTitle={selectedProject.project} 
          onCancel={() => setIsDeleteModalOpen(false)} 
          onConfirm={() => handleDelete(selectedProject.id)} 
        />
      )}

      {isEditModalOpen && selectedProject && (
        <EditModal 
          project={selectedProject} 
          onCancel={() => setIsEditModalOpen(false)} 
          onSave={handleEdit} 
        />
      )}
    </div>
  );
}
