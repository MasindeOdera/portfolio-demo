import { render, screen, fireEvent } from '@testing-library/react';
import EditModal from '@/app/components/EditModal';

describe('EditModal Component', () => {
  const mockOnCancel = jest.fn();
  const mockOnSave = jest.fn();
  const mockProject = {
    id: 1,
    project: 'Test Project',
    image: 'https://example.com/image.jpg',
    description: 'This is a test project description.'
  };

  beforeEach(() => {
    render(
      <EditModal 
        project={mockProject} 
        onCancel={mockOnCancel} 
        onSave={mockOnSave} 
      />
    );
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <EditModal 
        project={mockProject} 
        onCancel={mockOnCancel} 
        onSave={mockOnSave} 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders the correct initial values', () => {
    expect(screen.getByLabelText(/Title/i)).toHaveValue('Test Project');
    expect(screen.getByLabelText(/Description/i)).toHaveValue('This is a test project description.');
  });

  test('updates input values correctly', () => {
    const titleInput = screen.getByLabelText(/Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);

    fireEvent.change(titleInput, { target: { value: 'Updated Project' } });
    fireEvent.change(descriptionInput, { target: { value: 'Updated project description.' } });

    expect(titleInput).toHaveValue('Updated Project');
    expect(descriptionInput).toHaveValue('Updated project description.');
  });

  test('calls onCancel when Cancel button is clicked', () => {
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test('calls onSave with correct data when Save button is clicked', () => {
    const saveButton = screen.getByText(/Save/i);
    const titleInput = screen.getByLabelText(/Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);

    fireEvent.change(titleInput, { target: { value: 'Updated Project' } });
    fireEvent.change(descriptionInput, { target: { value: 'Updated project description.' } });
    fireEvent.click(saveButton);

    expect(mockOnSave).toHaveBeenCalledWith({
      ...mockProject,
      project: 'Updated Project',
      description: 'Updated project description.'
    });
  });
});
