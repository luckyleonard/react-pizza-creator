import React from 'react';
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
  { label: 'postcode', placeholder: '3000', name: 'postcode' },
  {
    label: 'contact number',
    placeholder: '0400 123 456',
    name: 'contactNumber'
  }
];

const DetailItem = ({
  label,
  placeholder,
  name,
  input,
  alarm,
  handleDetail
}) => {
  return (
    <ItemWrapper>
      <Label>
        {label}
        <Alarm>{alarm[name]}</Alarm>
      </Label>
      <Input
        type='text'
        placeholder={placeholder}
        name={name}
        value={input[name] || ''} //fix the warning from https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
        onBlur={e => handleDetail(e)}
        onChange={e => handleDetail(e)}
      />
    </ItemWrapper>
  );
};
DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  input: PropTypes.object,
  alarm: PropTypes.object,
  handleDetail: PropTypes.func.isRequired
};

const DetailForm = ({ detail, detailMsg, handleDetail }) => {
  return (
    <FormWrapper>
      {itemList.map((item, index) => {
        return (
          <DetailItem
            {...item}
            input={detail}
            alarm={detailMsg}
            key={index}
            handleDetail={handleDetail}
          />
        );
      })}
    </FormWrapper>
  );
};

DetailForm.propTypes = {
  detail: PropTypes.object,
  detailMsg: PropTypes.object,
  handleDetail: PropTypes.func.isRequired
};

export default DetailForm;
