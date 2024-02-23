import React from 'react';
import './button.css';

interface ButtonProps {
  classes?: string;
  isIcon?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  testId?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, classes, isIcon, testId }) => {
  const baseClassName = 'button';

  const combinedClassName = classes ? `${baseClassName} ${classes}` : baseClassName;

  return (
    <button className={combinedClassName} data-testid={testId} onClick={onClick}>
      {
        isIcon 
        ? children
        : (<span className={`${baseClassName}__text`}>{children}</span>)
      }
    </button>
  );
};

export default Button;
