import { useState } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import { theme } from '../styles/theme';

type NewProject = {
  project: string;
  image: string;
  description: string;
};

interface AddModalProps {
  onCancel: () => void;
  onAdd: (newProject: NewProject) => void;
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

const InfoText = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.primary};
  font-style: italic;
  margin-bottom: 10px;
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

export default function AddModal({ onCancel, onAdd }: AddModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const generateRandomImage = () => {
    const categories = ['nature', 'business', 'technology', 'fashion', 'transport', 'food', 'animals'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomImageUrl = `https://loremflickr.com/640/480/${randomCategory}?random=${Math.random()}`;
    return randomImageUrl;
  };

  const handleAdd = () => {
    if (name && description) {
      const randomImage = generateRandomImage();
      onAdd({ project: name, description, image: randomImage });
    }
  };

  return (
    <ModalContainer title="Add New Project">
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

        <InfoText>
          Your project screenshot will be automatically generated from a random image.
        </InfoText>
      </FormContainer>

      <ButtonContainer>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonContainer>
    </ModalContainer>
  );
}
