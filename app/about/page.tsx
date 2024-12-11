import ProfileImage from "../components/ProfileImage";

export default function AboutPage() {
    return (
        <div style={{ textAlign: 'center' }}>
        <ProfileImage size={100} />
        <h1>About Me</h1>
        <p>Hello, I am a frontend developer with a passion for building amazing web experiences.</p>
        <p>Skills: React, Next.js, TypeScript, Styled-Components, and more...</p>
        </div>
    );
}
  