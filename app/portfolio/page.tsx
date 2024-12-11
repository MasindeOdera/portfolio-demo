'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import SkeletonLoader from "../components/SkeletonLoader";
import { theme } from "../styles/theme";

type Project = {
  id: number;
  project: string;
  image: string;
  description: string;
};

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const InfoText = styled.p`
  margin: 10px 0 20px;
  font-size: 1rem;
  color: ${theme.colors.detail};
`;

export default function PortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      async function fetchProjects() {
        try {
          const response = await fetch('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio');
          const data = await response.json();
          setProjects(data);
        } catch (error) {
          console.error('Failed to fetch projects:', error);
        } finally {
          setLoading(false); // Loading is complete
        }
      }
      fetchProjects();
    }, []);
  
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Portfolio</h1>
        <InfoText>
          The projects displayed below are for demonstration purposes and can be updated, edited, or removed via the <strong>Admin</strong> section.
        </InfoText>
        <PortfolioContainer>
        {loading ? (
          // Show 6 skeleton loaders while loading
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        ) : (
          // Show real project cards after loading
          projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.project} 
              description={project.description} 
              imageUrl={project.image} 
            />
          ))
        )}
        </PortfolioContainer>
      </div>
    );
}
  