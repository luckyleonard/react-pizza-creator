import React from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  PizzaSVG,
  PizzaLabel,
  AllSelectorWrapper,
  OneSelectorWrapper
} from './style';
import pizzaSVG from './assets/pizza-svgrepo-com.svg';

const SelectorItem = ({ size, label, selected, onSelect }) => (
  <OneSelectorWrapper onClick={onSelect}>
    <PizzaSVG src={pizzaSVG} alt={label} size={size} selected={selected} />
    <PizzaLabel selected={selected}>{label}</PizzaLabel>
  </OneSelectorWrapper>
);
SelectorItem.propTypes = {
  size: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};

const SizeSelector = ({ sizes, selectedSize, onSelect }) => (
  <>
    <Label>Select the size *</Label>
    <AllSelectorWrapper>
      {sizes.map(size => {
        return (
          <SelectorItem
            {...size}
            key={size.price}
            selected={selectedSize === size}
            onSelect={() => {
              onSelect(size);
            }}
          />
        );
      })}
    </AllSelectorWrapper>
  </>
);

SizeSelector.propTypes = {};
export default SizeSelector;
