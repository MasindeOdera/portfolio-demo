'use client';

import { useEffect, useState } from "react";
import Image from 'next/image';

type Project = {
  id: number;
  project: string;
  image: string;
  description: string;
};

export default function PortfolioPage() {
    const [projects, setProjects] = useState<Project[]>([]);
  
    useEffect(() => {
      async function fetchProjects() {
        try {
          const response = await fetch('https://67530214f3754fcea7ba71d6.mockapi.io/api/v1/portfolio');
          const data = await response.json();
          setProjects(data);
        } catch (error) {
          console.error('Failed to fetch projects:', error);
        }
      }
      fetchProjects();
    }, []);
  
    return (
      <div>
        <h1>Portfolio</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.project}</h2>
            <Image src={project.image} alt={project.project} width={300} height={220} />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  