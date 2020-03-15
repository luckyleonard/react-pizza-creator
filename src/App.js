import React, { useState, useCallback, useEffect } from 'react';
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
//don't put const in render() will return different cache
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

const REGEX = {
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
  address: /^.{3,}$/,
  postcode: /^\d{4}$/,
  contactNumber: /^(?:(?:61)|(?:0))?([23478])(\d{4})(\d{4})$/gm
};

function isEmpty(obj) {
  for (var prop in obj) {
    return false;
  }
  return true;
}

function isEmptyProp(obj) {
  for (var prop in obj) {
    if (obj[prop] !== '') {
      return false;
    }
  }
  return true;
}

const App = () => {
  const [detail, setDetail] = useState({});
  const [detailMsg, setDetailMsg] = useState({});
  const [validation, setValidation] = useState(false);
  const [size, setSize] = useState(SIZE_OPTION[2]);
  const [toppings, setToppings] = useState([]);

  const handleDetail = e => {
    let value = e.target.value;
    let name = e.target.name;
    if (value.trim().length === 0) {
      setDetailMsg(prevState => ({
        ...prevState,
        [name]: 'field is required'
      }));
      setValidation(false);
      setDetail(prevState => ({ ...prevState, [name]: value }));
      //need to set detail, or when the content is empty,it will not refresh the Detail component, then will left one letter in Input
      return;
    }

    let regex = new RegExp(REGEX[name]);

    switch (name) {
      case 'email':
        if (!regex.test(value)) {
          setDetailMsg(prevState => ({
            ...prevState,
            [name]: 'Email address is invalid'
          }));
          setValidation(false);
          break;
        }
        setDetailMsg(prevState => ({
          ...prevState,
          [name]: ''
        }));
        break;

      case 'confirmEmail':
        if (value !== detail['email']) {
          setDetailMsg(prevState => ({
            ...prevState,
            [name]: 'Confirm Email address is incorrect'
          }));
          setValidation(false);
          break;
        }
        setDetailMsg(prevState => ({
          ...prevState,
          [name]: ''
        }));
        break;

      case 'address':
        if (!regex.test(value)) {
          setDetailMsg(prevState => ({
            ...prevState,
            [name]: 'Min of 3 characters'
          }));
          setValidation(false);
          break;
        }
        setDetailMsg(prevState => ({
          ...prevState,
          [name]: ''
        }));
        break;

      case 'postcode':
        if (!regex.test(value)) {
          setDetailMsg(prevState => ({
            ...prevState,
            [name]: 'Post code is invalid'
          }));
          setValidation(false);
          break;
        }

        setDetailMsg(prevState => ({
          ...prevState,
          [name]: ''
        }));
        break;

      case 'contactNumber':
        if (!regex.test(value)) {
          setDetailMsg(prevState => ({
            ...prevState,
            [name]: 'phone number is incorrect'
          }));
          setValidation(false);
          break;
        }
        setDetailMsg(prevState => ({
          ...prevState,
          [name]: ''
        }));
        break;

      default:
        setDetailMsg(prevState => ({
          ...prevState,
          [name]: ''
        }));
    }

    setDetail(prevState => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setValidation(
      !isEmpty(detailMsg) &&
        isEmptyProp(detailMsg) &&
        Object.keys(detail).length === 6
    ); //when there is no error in detailMsg, and all detail been create, set Submit button available
  }, [detail, detailMsg]); //as setState is async, only can get current state after the update in useEffect

  const handleSizeSelect = useCallback(size => {
    setSize(size);
  }, []);

  const handleToppingSelect = useCallback(
    chosenTopping => {
      toppings.includes(chosenTopping)
        ? setToppings(toppings.filter(topping => topping !== chosenTopping))
        : setToppings([...toppings, chosenTopping]);
    },
    [toppings]
  );

  return (
    <Layout>
      <Section title='Enter your details'>
        <DetailForm
          detail={detail}
          detailMsg={detailMsg}
          handleDetail={handleDetail}
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
