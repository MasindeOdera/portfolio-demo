'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface ProfileImageProps {
  size?: number;
}

const ProfileImageContainer = styled.div<ProfileImageProps>`
  position: relative;
  width: ${({ size }) => size || 150}px;
  height: ${({ size }) => size || 150}px;
  min-width: ${({ size }) => size || 150}px;
  min-height: ${({ size }) => size || 150}px;
  margin: 10px auto;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${theme.colors.secondary};
  box-shadow: 0 0 15px rgba(0,0,0,0.3);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export default function ProfileImage({ size = 150 }: ProfileImageProps) {
  return (
    <ProfileImageContainer size={size}>
      <Image 
        src="/profile.jpg" 
        alt="My Profile Picture" 
        width={size} 
        height={size} 
        style={{ objectFit: 'cover' }} 
        priority 
      />
    </ProfileImageContainer>
  );
}
