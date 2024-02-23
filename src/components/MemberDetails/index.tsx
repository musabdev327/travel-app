import React from 'react'
import MemberQuantity from './MemberQuantity'
import groupUserIcon from '../../assets/svgs/group-user.svg'
import './member-detail.css'

const MemberDetails: React.FC = () => {
  return (
    <div className="member-container">
      <div className="member--heading">
        <img src={groupUserIcon} alt='group user icon' />
        <span>Travelling members</span>
      </div>
      <hr />
      <MemberQuantity label="Legal Spouse" description="Must have marrige certificate" />
      <hr />
      <MemberQuantity selectedQuantity={2} label="Children under 18" description="Must have birth certificate" />
      <hr />
      <MemberQuantity selectedQuantity={5} label="Pets" description="Must have documents" />
    </div>
  )
}

export default MemberDetails