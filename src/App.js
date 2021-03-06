import React, { useState, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';

import Section from './components/Section';
import DetailForm from './components/DetailForm';
import SizeSelector from './components/SizeSelector';
import ToppingSelector from './components/ToppingSelector';
import OrderSummary from './components/OrderSummary';
import { default as detailValidation } from './utils/validationData';

const Layout = styled.div`
  padding: 20px 30px;
`;

const PlaceOrderButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 15px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.4);

  ${({ valid }) => {
    return (
      valid &&
      css`
        background: #98c550;
        cursor: pointer;
        color: white;
        &:hover {
          background: #b9ea6a;
        }
      `
    );
  }}
`;

//don't put const in render() will return different cache address
const SIZE_OPTION = [
  { size: 5, label: 'Large (13")', price: 16.99 },
  { size: 4, label: 'Medium (11")', price: 12.99 },
  { size: 3, label: 'Small (9")', price: 9.99 },
];

const TOPPING_INFORMATION = [
  { label: 'Anchovy', price: 0.69 },
  { label: 'Bacon', price: 0.69 },
  { label: 'Base', price: 0.99 },
  { label: 'Basil', price: 0.69 },
  { label: 'Board', price: 0.99 },
  { label: 'Chili', price: 0.69 },
  { label: 'Mozzarella', price: 0.69 },
  { label: 'Mushroom', price: 0.69 },
  { label: 'Olive', price: 0.69 },
  { label: 'Onion', price: 0.69 },
  { label: 'Pepper', price: 0.69 },
  { label: 'Pepperoni', price: 0.69 },
  { label: 'Prawn', price: 0.99 },
  { label: 'Sweetcorn', price: 0.69 },
  { label: 'Tomato', price: 0.69 },
];

const App = () => {
  const [detail, setDetail] = useState({});
  const [size, setSize] = useState(SIZE_OPTION[2]);
  const [toppings, setToppings] = useState([]);
  const [dirty, setDirty] = useState(false);
  const [validButton, setValidButton] = useState(true);

  useLayoutEffect(() => {
    if (detailValidation(detail) && toppings.length !== 0) {
      setValidButton(true);
    }
  }, [detail, toppings]);

  const handleDetail = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSizeSelect = (size) => {
    setSize(size);
  };

  const handleToppingSelect = (chosenTopping) => {
    toppings.includes(chosenTopping)
      ? setToppings(toppings.filter((topping) => topping !== chosenTopping))
      : setToppings([...toppings, chosenTopping]);
  };

  const handleSubmit = () => {
    setDirty(true);
    const valid = detailValidation(detail);

    if (!valid || toppings.length === 0) {
      setValidButton(false);
      alert('Please submit the form with required details');
      return;
    }

    alert(
      `order placed: ${size.label} with topping: ${toppings
        .map((topping) => topping.label)
        .join(',')}`
    );
  };

  return (
    <Layout>
      <Section title='Enter your details'>
        <DetailForm
          detail={detail}
          handleDetail={handleDetail}
          formDirty={dirty}
        />
      </Section>
      <Section title='Choose your pizza'>
        <SizeSelector
          sizes={SIZE_OPTION}
          selectedSize={size}
          onSelect={handleSizeSelect}
        />
        <ToppingSelector
          toppingList={TOPPING_INFORMATION}
          selectedToppings={toppings}
          onSelect={handleToppingSelect}
          toppingDirty={dirty}
        />
      </Section>
      <Section title='Order summary'>
        <OrderSummary selectedSize={size} selectedToppings={toppings} />
      </Section>
      <PlaceOrderButton valid={validButton} onClick={handleSubmit}>
        Place order
      </PlaceOrderButton>
    </Layout>
  );
};

export default App;
