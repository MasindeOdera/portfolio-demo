'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { theme } from '../styles/theme';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.6s ease forwards;

  &:hover {
    transform: translateY(0px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.3);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${theme.colors.detail};
`;

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <CardContainer>
      <ImageContainer>
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }} 
          loading="lazy" 
        />
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
}
