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

const SelectorItem = ({ size, label }) => (
  <OneSelectorWrapper>
    <PizzaSVG src={pizzaSVG} alt='Pizza' size={size} />
    <PizzaLabel>{label}</PizzaLabel>
  </OneSelectorWrapper>
);

const SizeSelector = () => (
  <>
    <Label>Select the size *</Label>
    <AllSelectorWrapper>
      <SelectorItem size='5' label='Large (13")' />
      <SelectorItem size='4' label='Medium (11")' />
      <SelectorItem size='3' label='Small (9")' />
    </AllSelectorWrapper>
  </>
);

SizeSelector.propTypes = {};
export default SizeSelector;
