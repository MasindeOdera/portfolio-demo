import styled from 'styled-components';
import { theme } from '../styles/theme';

interface DeleteModalProps {
  projectTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.text}; //address the font white issue
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 220px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export default function DeleteModal({ projectTitle, onCancel, onConfirm }: DeleteModalProps) {
  return (
    <ModalContainer>
      <p>Are you sure you want to delete &quot;{projectTitle}&quot;?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </ModalContainer>
  );
}
