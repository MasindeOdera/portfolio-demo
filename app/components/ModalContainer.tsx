import styled from 'styled-components';
import { theme } from '../styles/theme';

interface ModalContainerProps {
  title: string;
  children: React.ReactNode;
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: ${theme.colors.primary};
`;

const Content = styled.div`
  flex-grow: 1;
`;

export default function ModalContainer({ title, children }: ModalContainerProps) {
  return (
    <Container>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </Container>
  );
}
