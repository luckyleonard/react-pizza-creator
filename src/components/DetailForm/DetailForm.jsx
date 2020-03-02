import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Label = styled.h3`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  ::after {
    content: ' *';
    color: red;
  }
`;

const Input = styled.input`
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
  font-family: inherit;
  color: rgba(0, 0, 0, 0.8);
  width: 80%;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const ItemWrapper = styled.div`
  flex: 33.3%;
`;

const DetailItem = ({ label, placeholder, name }) => (
  <ItemWrapper>
    <Label>{label}</Label>
    <Input type='text' placeholder={placeholder} name={name} />
  </ItemWrapper>
);
DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const DetailForm = () => {
  const itemList = [
    { label: 'name', placeholder: 'John Smith', name: 'name' },
    { label: 'email', placeholder: 'Enter your email', name: 'email' },
    {
      label: 'confirm',
      placeholder: 'Confirm your email',
      name: 'confirmEmail'
    },
    { label: 'address', placeholder: '44 Pizza Street', name: 'address' },
    { label: 'postcode', placeholder: 'PI3 3AS', name: 'postcode' },
    {
      label: 'contact number',
      placeholder: '01234 567 890',
      name: 'contactNumber'
    }
  ];

  return (
    <FormWrapper>
      {itemList.map((item, index) => {
        return <DetailItem {...item} key={index} />;
      })}
      ;
    </FormWrapper>
  );
};

DetailForm.propTypes = {};

export default DetailForm;
