import React, { useMemo, useState } from 'react'
import MemberDetails from '../../components/MemberDetails'
import Button from '../../components/shared/Button'
import loader from '../../assets/svgs/rectangle-loader.svg'
import backgroundFinancialImage from '../../assets/svgs/bg.svg'
import avatarSVG from '../../assets/svgs/avatar.svg'
import germanyFlag from '../../assets/svgs/flags/germany.svg'
import ukraineFlag from '../../assets/svgs/flags/ukraine.svg'
import './travel-details.css'
import Chip from '../../components/Chip'


const TravelingDetails: React.FC = () => {
  const [travelingStatus, setTravelingStatus] = useState('alone');

  const isTravelingAlone = useMemo(() => travelingStatus === 'alone', [travelingStatus])
  return (
    <div className="travel-details-container">
      <div className="travel-details--members">
        <div className="travel-details--members_quantity">
          <div className="travel-details--members__labels">
            <h3>Traveling Members</h3>
            <p>Are you traveling alone or with someone else?</p>
          </div>

          <div className="travel-details--members__details">
            <Button onClick={() => setTravelingStatus('alone')}>Alone</Button>
            <Button onClick={() => setTravelingStatus('withOther')}>With Others</Button>
          </div>

          {!isTravelingAlone &&
            <MemberDetails />
          }

          <div className="travel-details--members__action">
            <Button classes="back-btn">{"<"} Back</Button>
            <Button classes="continue">Continue</Button>
          </div>
        </div>
      </div>

      <div className="travel-details--financial">
        <div className="travel-details--financial_information" style={{ backgroundImage: `url(${backgroundFinancialImage})` }}>
          <div className="travel-details--financial_information__details">
            <div className="travel-details--financial_information__avatar">
              <img src={avatarSVG} alt='avatar profile' />
              <div className="avatar__info">
                <h3>Fellow Traveler</h3>
                <p>traveleremail@gmail.com</p>
              </div>
            </div>
            <div className="travel-details--financial_information__flag">
              <img src={germanyFlag} alt='germany flag' />
              <img src={ukraineFlag} alt='ukraine flag' />
            </div>
          </div>


          <div className="travel-details--financial_information__card">
            <div className="flex justify-between flex-col gap-20 p-20">
              <div className="card__label">
                Finance Information
                <hr />
              </div>

              <div className="travel-details--financial_information__card__body">
                <h5>Full Remote Job</h5>
                <p>Yes, for over 6 months.</p>
              </div>

              <div className="travel-details--financial_information__card__body">
                <h5>Self employed</h5>
                <p>I'm self employed {"<"} 3 years business</p>
              </div>

              <div className="flex justify-between gap-5">
                <div className="travel-details--financial_information__card_income flex-50">
                  <p className="label">Income</p>
                  <p className="price">$1000</p>
                </div>

                <div className="travel-details--financial_information__card_income flex-50">
                  <p className="label">Income</p>
                  <p className="price">$1000</p>
                </div>
              </div>
            </div>

            <div className="travel-details--financial_information__members">
              <div className="card__label">
                <h5>Traveling Members</h5>
                <hr />
              </div>

              <div className="travel-details--financial_information__members_quantity">
                <div className="member">
                  <Chip label='1' />
                  <p>Legal Spouce</p>
                </div>
                <div className="member">
                  <Chip label='2' />
                  <p>Children under 18</p>
                </div>
                <div className="member">
                  <Chip label='5' />
                  <p>Pets</p>
                </div>
              </div>
            </div>


            <div className="additions">
              <div className="card__label">
                <h5>Additions</h5>
                <hr />
              </div>
              <img src={loader} alt="skeleton loader" />
            </div>

          </div>

          <p className="travel-details--footer">Personal Travel Card by Citizen Remote</p>
        </div>
      </div>
    </div>
  )
}

export default TravelingDetails