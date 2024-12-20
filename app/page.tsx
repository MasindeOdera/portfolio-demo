"use client";

import ProfileImage from './components/ProfileImage';
import { GlobalStyle } from './styles/global';



export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <GlobalStyle />
      <ProfileImage size={150} /> 
      <h1>Welcome to My Creative Lair!</h1>
      <p>Where pixels party, code conquers, and ideas run wild.</p>
      <p>Dive in, explore, and see what happens when genius meets JavaScript!</p>
    </div>
  );
}
