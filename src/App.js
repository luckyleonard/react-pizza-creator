import React from 'react';
import Section from './components/Section';
import DetailForm from './components/DetailForm';
import SizeSelector from './components/SizeSelector';
import ToppingSelector from './components/ToppingSelector';
import OrderSummary from './components/OrderSummary';

import styled from 'styled-components';

const Layout = styled.div`
  padding: 20px 30px;
`;

const PlaceOrderButton = styled.button`
  border: 0;
  outline: 0;
  background: #98c550;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  color: white;

  &:hover {
    background: #b9ea6a;
  }
`;

function App() {
  return (
    <Layout>
      <Section title='Enter your details'>
        <DetailForm />
      </Section>
      <Section title='Choose your pizza'>
        <SizeSelector />
        <ToppingSelector />
      </Section>
      <Section title='Order summary'>
        <OrderSummary />
      </Section>
      <PlaceOrderButton>Place order</PlaceOrderButton>
    </Layout>
  );
}

export default App;
