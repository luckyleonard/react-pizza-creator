import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input, FormWrapper, ItemWrapper } from './style';

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
    </FormWrapper>
  );
};

DetailForm.propTypes = {};

export default DetailForm;
