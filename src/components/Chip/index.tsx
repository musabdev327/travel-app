import React from 'react';
import './chip.css';

interface ChipProps {
  label: string;
  onClick?: () => void;
  onClose?: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onClick, onClose }) => {
  return (
    <div className="chip" onClick={onClick}>
      <span className="chip-label">{label}</span>
      {onClose && <button className="chip-close-button" onClick={onClose}>x</button>}
    </div>
  );
};

export default Chip;
