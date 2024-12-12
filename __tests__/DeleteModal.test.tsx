import { render, screen, fireEvent } from '@testing-library/react';
import DeleteModal from '@/app/components/DeleteModal';

describe('DeleteModal Component', () => {
  const mockOnCancel = jest.fn();
  const mockOnConfirm = jest.fn();

  beforeEach(() => {
    render(
      <DeleteModal 
        projectTitle="Test Project" 
        onCancel={mockOnCancel} 
        onConfirm={mockOnConfirm} 
      />
    );
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <DeleteModal 
        projectTitle="Test Project" 
        onCancel={mockOnCancel} 
        onConfirm={mockOnConfirm} 
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('displays the correct project title', () => {
    expect(screen.getByText(/Are you sure you want to delete "Test Project"?/i)).toBeInTheDocument();
  });

  test('calls onCancel when No button is clicked', () => {
    const noButton = screen.getByText(/No/i);
    fireEvent.click(noButton);
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test('calls onConfirm when Yes button is clicked', () => {
    const yesButton = screen.getByText(/Yes/i);
    fireEvent.click(yesButton);
    expect(mockOnConfirm).toHaveBeenCalled();
  });
});
