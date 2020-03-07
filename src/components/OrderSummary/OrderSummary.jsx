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
  price: PropTypes.string.isRequired
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
  toppingPrice: PropTypes.string
};

const OrderSummary = () => (
  <>
    <SizePrice size='Medium Pizza' sizePrice='12.99' />
    <ToppingPrice topping='Bacon' toppingPrice='0.99' />
    <TotalPrice>13.98</TotalPrice>
  </>
);
OrderSummary.propTypes = {};
export default OrderSummary;
