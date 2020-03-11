import React from 'react';
import PropTypes from 'prop-types';
import { Label, ToppingSelectorWrapper, Topping, ToppingIcon } from './style';

import anchovy from './assets/anchovy.svg';
import bacon from './assets/bacon.svg';
import base from './assets/base.svg';
import basil from './assets/basil.svg';
import board from './assets/board.svg';
import chili from './assets/chili.svg';
import mozzarella from './assets/mozzarella.svg';
import mushroom from './assets/mushroom.svg';
import olive from './assets/olive.svg';
import onion from './assets/onion.svg';
import pepper from './assets/pepper.svg';
import pepperoni from './assets/pepperoni.svg';
import prawn from './assets/prawn.svg';
import sweetcorn from './assets/sweetcorn.svg';
import tomato from './assets/tomato.svg';

const TOPPING_SVG = {
  anchovy,
  bacon,
  base,
  basil,
  board,
  chili,
  mozzarella,
  mushroom,
  olive,
  onion,
  pepper,
  pepperoni,
  prawn,
  sweetcorn,
  tomato
};

const SelectorItem = ({ label, selected, onSelect }) => (
  <Topping onClick={onSelect} selected={selected}>
    <ToppingIcon toppingSVG={TOPPING_SVG[label.toLowerCase()]} />
    {label}
  </Topping>
);

SelectorItem.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired
};

const ToppingSelector = ({ toppingList, selectedToppings, onSelect }) => {
  return (
    <>
      <Label>Pick your toppings</Label>
      <ToppingSelectorWrapper>
        {toppingList.map((topping, index) => {
          return (
            <SelectorItem
              {...topping}
              key={index}
              selected={JSON.stringify(selectedToppings).includes(
                JSON.stringify(topping)
              )}
              onSelect={() => onSelect(topping)}
            />
          );
        })}
      </ToppingSelectorWrapper>
    </>
  );
};

ToppingSelector.propTypes = {
  toppingList: PropTypes.array.isRequired,
  selectedToppings: PropTypes.array,
  onSelect: PropTypes.func.isRequired
};
export default ToppingSelector;
