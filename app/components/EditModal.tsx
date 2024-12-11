import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

type Project = {
    id: number;
    project: string;
    image: string;
    description: string;
};

interface EditModalProps {
  project: Project;
  onCancel: () => void;
  onSave: (updatedProject: Project) => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.text};
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 220px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export default function EditModal({ project, onCancel, onSave }: EditModalProps) {
  const [name, setName] = useState(project.project);
  const [description, setDescription] = useState(project.description);

  return (
    <ModalContainer>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={() => onSave({ ...project, project: name, description })}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </ModalContainer>
  );
}
