import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './';

describe('Button component', () => {
  it('renders children correctly', () => {
    const buttonText = 'Click me';
    render(<Button testId="test-button">{buttonText}</Button>);
    const buttonElement = screen.getByTestId('test-button');
    expect(buttonElement).toHaveTextContent(buttonText);
  });

  it('calls onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button testId="test-button" onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByTestId('test-button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom classes correctly', () => {
    const customClass = 'custom-class';
    render(<Button testId="test-button" classes={customClass}>Click me</Button>);
    const buttonElement = screen.getByTestId('test-button');
    expect(buttonElement).toHaveClass(customClass);
  });

  it('renders children as icon when isIcon is true', () => {
    const icon = <svg />;
    render(<Button testId="test-button" isIcon>{icon}</Button>);
    const buttonElement = screen.getByTestId('test-button');
    expect(buttonElement).toContainHTML('<svg');
  });
});
