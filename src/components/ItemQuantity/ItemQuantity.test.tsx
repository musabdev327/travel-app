import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ItemQuantity from '.';

describe('ItemQuantity component', () => {
  it('renders with initial quantity correctly', () => {
    const selectedQuantity = 5;
    render(<ItemQuantity selectedQuantity={selectedQuantity} />);
    const quantityText = screen.getByText(selectedQuantity.toString());
    expect(quantityText).toBeInTheDocument();
  });

  it('calls onChange callback with updated quantity when quantity is incremented', () => {
    const onChangeMock = jest.fn();
    render(<ItemQuantity onChange={onChangeMock} />);
    const plusButton = screen.getByTestId('positive-btn');
    fireEvent.click(plusButton);
    expect(onChangeMock).toHaveBeenCalledWith(2); 
  });

  it('does not call onChange callback when quantity is decremented from 0', () => {
    const onChangeMock = jest.fn();
    render(<ItemQuantity selectedQuantity={0} onChange={onChangeMock} />);
    const minusButton = screen.getByTestId('minus-btn');
    fireEvent.click(minusButton);
    const quantity = screen.getByTestId('quantity');

    expect(quantity.innerHTML).toBe("1")
  });
});
