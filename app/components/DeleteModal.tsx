import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { theme } from '../styles/theme';

interface DeleteModalProps {
  projectTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const Message = styled.p`
  font-size: 1rem;
  color: ${theme.colors.background};
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 45%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:nth-child(1) {
    background-color: ${theme.colors.danger};
    color: ${theme.colors.text};
  }

  &:nth-child(2) {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.text};
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function DeleteModal({ projectTitle, onCancel, onConfirm }: DeleteModalProps) {
  return (
    <ModalContainer title="Delete Project">
      <Message>Are you sure you want to delete &quot;{projectTitle}&quot;?</Message>
      <ButtonContainer>
        <Button onClick={onConfirm}>Yes</Button>
        <Button onClick={onCancel}>No</Button>
      </ButtonContainer>
    </ModalContainer>
  );
}
