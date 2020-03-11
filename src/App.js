import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

import Section from './components/Section';
import DetailForm from './components/DetailForm';
import SizeSelector from './components/SizeSelector';
import ToppingSelector from './components/ToppingSelector';
import OrderSummary from './components/OrderSummary';

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

  ${({ validation }) => {
    return (
      validation &&
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

const App = () => {
  const SIZE_OPTION = [
    { size: 5, label: 'Large (13")', price: 16.99 },
    { size: 4, label: 'Medium (11")', price: 12.99 },
    { size: 3, label: 'Small (9")', price: 9.99 }
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
    { label: 'Tomato', price: 0.69 }
  ];

  const [detail, setDetail] = useState({});
  const [size, setSize] = useState(SIZE_OPTION[0]);
  const [toppings, setToppings] = useState([]);
  const [validation, setValidation] = useState(false);

  const handleDetail = useCallback(e => {
    let value = e.target.value;
    let name = e.target.name;
    setDetail(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSizeSelect = useCallback(size => {
    setSize(size);
  }, []);

  const handleToppingSelect = useCallback(
    chosenTopping => {
      JSON.stringify(toppings).includes(JSON.stringify(chosenTopping))
        ? setToppings(
            toppings.filter(
              topping =>
                JSON.stringify(topping) !== JSON.stringify(chosenTopping)
            )
          )
        : setToppings([...toppings, chosenTopping]);
    },
    [toppings]
  );

  return (
    <Layout>
      <Section title='Enter your details'>
        <DetailForm handleDetail={handleDetail} />
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
        />
      </Section>
      <Section title='Order summary'>
        <OrderSummary selectedSize={size} selectedToppings={toppings} />
      </Section>
      <PlaceOrderButton validation={validation}>Place order</PlaceOrderButton>
    </Layout>
  );
};

export default App;
