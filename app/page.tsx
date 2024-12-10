"use client";

import Image from 'next/image';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const ProfileImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
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

export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <GlobalStyle />
      <ProfileImageContainer>
        <Image
          src="/profile.jpg" 
          alt="My Profile Picture" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
      </ProfileImageContainer>
      <h1>Welcome to My Creative Lair!</h1>
      <p>Where pixels party, code conquers, and ideas run wild.</p>
      <p>Dive in, explore, and see what happens when genius meets JavaScript!</p>
    </div>
  );
}
