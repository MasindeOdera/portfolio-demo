import { useState } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.detail};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.detail};
  font-size: 1rem;
  height: 80px;
  resize: none;
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
    background-color: ${theme.colors.success};
    color: ${theme.colors.text};
  }

  &:nth-child(2) {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function EditModal({ project, onCancel, onSave }: EditModalProps) {
  const [name, setName] = useState(project.project);
  const [description, setDescription] = useState(project.description);

  return (
    <ModalContainer title="Edit Project">
      <FormContainer>
        <Label htmlFor="title">Title</Label>
        <Input 
          id="title" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        
        <Label htmlFor="description">Description</Label>
        <TextArea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </FormContainer>

      <ButtonContainer>
        <Button onClick={() => onSave({ ...project, project: name, description })}>
          Save
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </ButtonContainer>
    </ModalContainer>
  );
}
