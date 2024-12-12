import { render, screen, fireEvent } from '@testing-library/react';
import AddModal from '@/app/components/AddModal';

describe('AddModal Component', () => {
  const mockOnCancel = jest.fn();
  const mockOnAdd = jest.fn();

  beforeEach(() => {
    render(<AddModal onCancel={mockOnCancel} onAdd={mockOnAdd} />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<AddModal onCancel={mockOnCancel} onAdd={mockOnAdd} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders form inputs correctly', () => {
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
  });

  test('updates input values correctly', () => {
    const titleInput = screen.getByLabelText(/Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);

    fireEvent.change(titleInput, { target: { value: 'New Project' } });
    fireEvent.change(descriptionInput, { target: { value: 'This is a new project description.' } });

    expect(titleInput).toHaveValue('New Project');
    expect(descriptionInput).toHaveValue('This is a new project description.');
  });

  test('calls onCancel when Cancel button is clicked', () => {
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
