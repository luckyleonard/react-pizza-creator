import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  SizeSummary,
  SizePriceTag,
  ToppingSummary,
  ToppingPriceTag,
  TotalPrice,
  PlusIcon
} from './style';

const SizePrice = ({ size, sizePrice }) => (
  <SizeSummary>
    {size}
    <SizePriceTag>{sizePrice}</SizePriceTag>
  </SizeSummary>
);
SizePrice.propTypes = {
  size: PropTypes.string.isRequired,
  sizePrice: PropTypes.number.isRequired
};

const ToppingPrice = ({ topping, toppingPrice }) => (
  <ToppingSummary>
    <PlusIcon>
      <FontAwesomeIcon icon={faPlus} />
    </PlusIcon>
    {topping}
    <ToppingPriceTag>{toppingPrice}</ToppingPriceTag>
  </ToppingSummary>
);
ToppingPrice.propTypes = {
  topping: PropTypes.string,
  toppingPrice: PropTypes.number
};

const OrderSummary = ({ selectedSize, selectedToppings }) => {
  const totalPrice = selectedToppings.reduce(
    (t, v) => t + v.price,
    selectedSize.price
  );

  return (
    <>
      <SizePrice size={selectedSize.label} sizePrice={selectedSize.price} />
      {selectedToppings.map((selectedTopping, index) => {
        return (
          <ul>
            <ToppingPrice
              topping={selectedTopping.label}
              toppingPrice={selectedTopping.price}
              key={index}
            />
          </ul>
        );
      })}
      <TotalPrice>{totalPrice.toFixed(2)}</TotalPrice>
    </>
  );
};
OrderSummary.propTypes = {
  selectedSize: PropTypes.object.isRequired,
  selectedToppings: PropTypes.array
};
export default OrderSummary;
