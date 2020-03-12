import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormWrapper, ItemWrapper, Alarm } from './style';

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

const DetailItem = ({ label, placeholder, name, input, handleDetail }) => {
  const isRequired = () => {
    return <Alarm>field is required</Alarm>;
  };

  return (
    <ItemWrapper>
      <Label>
        {label}
        {isRequired()}
      </Label>
      <Input
        type='text'
        placeholder={placeholder}
        name={name}
        value={input[name]}
        onChange={e => handleDetail(e)}
        required
      />
    </ItemWrapper>
  );
};
DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const DetailForm = ({ detail, handleDetail }) => {
  return (
    <FormWrapper>
      {itemList.map((item, index) => {
        return (
          <DetailItem
            {...item}
            input={detail}
            key={index}
            handleDetail={handleDetail}
          />
        );
      })}
    </FormWrapper>
  );
};

DetailForm.propTypes = {};

export default DetailForm;
