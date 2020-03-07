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

const SelectorItem = ({ label, toppingSVG }) => (
  <Topping>
    <ToppingIcon toppingSVG={toppingSVG} />
    {label}
  </Topping>
);

SelectorItem.propTypes = {
  label: PropTypes.string.isRequired,
  toppingSVG: PropTypes.string.isRequired
};

const ToppingSelector = () => {
  const TOPPING_INFORMATION = [
    { label: 'Anchovy', toppingSVG: anchovy },
    { label: 'Bacon', toppingSVG: bacon },
    { label: 'Base', toppingSVG: base },
    { label: 'Basil', toppingSVG: basil },
    { label: 'Board', toppingSVG: board },
    { label: 'Chili', toppingSVG: chili },
    { label: 'Mozzarella', toppingSVG: mozzarella },
    { label: 'Mushroom', toppingSVG: mushroom },
    { label: 'Olive', toppingSVG: olive },
    { label: 'Onion', toppingSVG: onion },
    { label: 'Pepper', toppingSVG: pepper },
    { label: 'Pepperoni', toppingSVG: pepperoni },
    { label: 'Prawn', toppingSVG: prawn },
    { label: 'Sweetcorn', toppingSVG: sweetcorn },
    { label: 'Tomato', toppingSVG: tomato }
  ];
  return (
    <>
      <Label>Pick your toppings</Label>
      <ToppingSelectorWrapper>
        {TOPPING_INFORMATION.map((topping, index) => (
          <SelectorItem {...topping} key={index} />
        ))}
      </ToppingSelectorWrapper>
    </>
  );
};

ToppingSelector.propTypes = {};
export default ToppingSelector;
