import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Chip from '.';

describe('Chip component', () => {
  it('renders label correctly', () => {
    const label = 'Test Chip';
    render(<Chip label={label} />);
    const chipLabel = screen.getByText(label);
    expect(chipLabel).toBeInTheDocument();
  });

  it('calls onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    render(<Chip label="Test Chip" onClick={onClickMock} />);
    const onClickEl = screen.getByTestId('chip-container');

    fireEvent.click(onClickEl);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('calls onClose callback when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Chip label="Test Chip" onClose={onCloseMock} />);
    const onCloseEl = screen.getByTestId('chip-close');

    fireEvent.click(onCloseEl);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
