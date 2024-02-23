import React from 'react'
import citizenIcon from '../../../assets/svgs/citizen-icon.svg'
import Steps from '../../Steps'
import './header.css'

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__icon">
        <img src={citizenIcon} alt="Citizen Icon" />
        <h4 data-testid="heading">citizen remote</h4>
      </div>
      <div className="header_steps">
        <Steps onChange={() => {}} stepsLength={4} />
      </div>
      <div className=''></div>
    </div>

  )
}

export default Header