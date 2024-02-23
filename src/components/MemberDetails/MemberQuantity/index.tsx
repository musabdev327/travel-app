import React from 'react'
import ItemQuantity from '../../ItemQuantity'
import './member-quantity.css'

type MemberQuantityProps = {
  label: string;
  description: string;
  selectedQuantity?: number;
}

const MemberQuantity: React.FC<MemberQuantityProps> = ({ label, description, selectedQuantity }) => {
  return (
    <div className="member-detail-container">
      <div className="member-label-container">
        <h5 className="member-detail__label">{label}</h5>
        <p className="member-detail__description">{description}</p>        
      </div>
      <ItemQuantity selectedQuantity={selectedQuantity} />
    </div>
  )
}

export default MemberQuantity