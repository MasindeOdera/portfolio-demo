'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./../components/ProjectCard";
import DeleteModal from "./../components/DeleteModal";
import EditModal from "./../components/EditModal";
import { fetchProjects, deleteProject, updateProject } from "./../utils/api";

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

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

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

  // Add Skeleton for Admin?

  return (
    <div  style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Admin Dashboard</h1>
      <p>Manage your portfolio projects from here.</p>
      <p>Select the appropriate icon, located on the top right, to edit or delete.</p>
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
