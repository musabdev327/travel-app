import React from 'react';
import './button.css';

interface ButtonProps {
  classes?: string;
  isIcon?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, classes, isIcon }) => {
  const baseClassName = 'button';

  const combinedClassName = classes ? `${baseClassName} ${classes}` : baseClassName;

  return (
    <button className={combinedClassName} onClick={onClick}>
      {
        isIcon 
        ? children
        : (<span className={`${baseClassName}__text`}>{children}</span>)
      }
    </button>
  );
};

export default Button;
