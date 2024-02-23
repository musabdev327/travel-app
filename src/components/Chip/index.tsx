import React from 'react';
import './chip.css';

interface ChipProps {
  label: string;
  onClick?: () => void;
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onClick, onClose }) => {
  return (
    <div className="chip" data-testid="chip-container" onClick={onClick}>
      <span className="chip-label">{label}</span>
      {onClose && <button className="chip-close-button" data-testid="chip-close" onClick={onClose}>x</button>}
    </div>
  );
};

export default Chip;
