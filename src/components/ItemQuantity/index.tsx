import React, { useState } from 'react';
import Button from '../shared/Button';
import plusIcon from '../../assets/svgs/plus-icon.svg';
import minusIcon from '../../assets/svgs/minus-icon.svg';
import './item-quantity.css';


type ItemQuantityProps = {
  selectedQuantity?: number;
  onChange?: (quantity: number) => {};
}

const ItemQuantity: React.FC<ItemQuantityProps> = ({ selectedQuantity, onChange }) => {
  const [quantity, setQuantity] = useState(selectedQuantity || 1);

  const decrementQuantity = (updatedQuantity: number) => {
    if (updatedQuantity < 1) {
      return;
    }

    updateQuantity(updatedQuantity)
  }

  const updateQuantity = (updatedQuantity: number) => {
    setQuantity(updatedQuantity)

    if (onChange) {
      onChange(updatedQuantity);
    }

  }

  return (
    <div className='item-quantity-container'>
      <Button onClick={() => decrementQuantity(quantity - 1)} testId="minus-btn" classes="quantity-btn" isIcon>
        <img src={minusIcon} alt="plus icon" style={{ height: '10px' }} />
      </Button>
      <p data-testid="quantity" className='item-quantity-text'>{quantity}</p>
      <Button onClick={() => updateQuantity(quantity + 1)} testId="positive-btn" classes="quantity-btn" isIcon>
        <img src={plusIcon} alt="minus icon" />
      </Button>
    </div>
  )
}

export default ItemQuantity