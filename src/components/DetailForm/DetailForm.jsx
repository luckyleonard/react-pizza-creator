import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormWrapper, ItemWrapper, Alarm } from './style';

const DetailItem = ({ label, placeholder, name, handleDetail }) => {
  const [input, setInput] = useState('');
  const [focus, setFocus] = useState(false);
  const inputValue = useMemo(() => input.trim(), [input]);

  const isRequired = () => {
    if (!focus) {
      return;
    }
    return !Boolean(inputValue) && <Alarm>field is required</Alarm>;
  };

  const handleInput = e => {
    setInput(e.target.value);
    handleDetail(e);
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
        value={input}
        onChange={handleInput}
        onBlur={() => setFocus(true)}
      />
    </ItemWrapper>
  );
};
DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const DetailForm = ({ handleDetail }) => {
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
        return <DetailItem {...item} key={index} handleDetail={handleDetail} />;
      })}
    </FormWrapper>
  );
};

DetailForm.propTypes = {};

export default DetailForm;
