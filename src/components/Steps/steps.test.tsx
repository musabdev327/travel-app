import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Steps from '.';

describe('Steps component', () => {
  const onChangeMock = jest.fn();

  beforeEach(() => {
    onChangeMock.mockClear();
  });

  it('renders steps correctly', () => {
    const stepsLength = 5;
    render(<Steps stepsLength={stepsLength} onChange={onChangeMock} />);
    const stepElements = screen.getAllByAltText(/(selected|unselected) svg/);
    expect(stepElements).toHaveLength(stepsLength);
  });

  it('calls onChange callback with correct step when a step is clicked', () => {
    const stepsLength = 5;
    render(<Steps stepsLength={stepsLength} onChange={onChangeMock} />);
    const stepIndexToClick = 2; // Clicking the third step (index starts from 1)
    const stepElement = screen.getAllByAltText('unselected svg')[stepIndexToClick - 1];
    fireEvent.click(stepElement);
    expect(onChangeMock).toHaveBeenCalledWith(stepIndexToClick + 1);
  });

  it('applies selected class to the clicked step', () => {
    const stepsLength = 5;
    render(<Steps stepsLength={stepsLength} onChange={onChangeMock} />);
    const stepIndexToClick = 3;
    const stepElement = screen.getAllByAltText('unselected svg')[stepIndexToClick - 1];
    fireEvent.click(stepElement);
    expect(stepElement).toHaveClass('selected-step');
  });
});
