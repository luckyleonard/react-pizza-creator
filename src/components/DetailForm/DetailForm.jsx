import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormWrapper, ItemWrapper, Alarm } from './style';
import {
  isNotEmpty,
  isEmail,
  isEqual,
  isAddress,
  isPostcode,
  isPhone
} from '../../utils/useValidator';

const DetailItem = ({
  type,
  label,
  placeholder,
  validations,
  name,
  input,
  handleDetail
}) => {
  const [changed, setChanged] = useState(false);

  const alarm = validations.reduce((prevValue, currentValue) => {
    const { validator, alarm } = currentValue;
    if (validator(input)) {
      return prevValue;
    }
    return alarm;
  }, undefined);

  return (
    <ItemWrapper>
      <Label>
        {label}
        {alarm && changed && <Alarm>{alarm}</Alarm>}
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={input}
        onChange={e => {
          handleDetail(e);
          setChanged(true);
        }}
      />
    </ItemWrapper>
  );
};
DetailItem.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validation: PropTypes.array,
  name: PropTypes.string.isRequired,
  input: PropTypes.string,
  handleDetail: PropTypes.func.isRequired
};

const DetailForm = ({ detail, handleDetail }) => {
  const FORM_LIST = {
    name: {
      type: 'text',
      label: 'name',
      placeholder: 'John Smith',
      validation: [{ validator: isNotEmpty, alarm: 'name is required' }]
    },
    email: {
      type: 'text',
      label: 'email',
      placeholder: 'Enter your email',
      validation: [
        { validator: isNotEmpty, alarm: 'email is required' },
        { validator: isEmail, alarm: 'Email address is invalid' }
      ]
    },
    confirmEmail: {
      type: 'text',
      label: 'confirm',
      placeholder: 'Confirm your email',
      validation: [
        { validator: isNotEmpty, alarm: 'email is required' },
        {
          validator: value => isEqual(value, detail.email),
          alarm: 'confirm Email address is not match'
        }
      ]
    },
    address: {
      type: 'text',
      label: 'address',
      placeholder: '44 Pizza Street',
      validation: [
        { validator: isNotEmpty, alarm: 'address is required' },
        { validator: isAddress, alarm: 'Min of 3 characters' }
      ]
    },
    postcode: {
      type: 'text',
      label: 'postcode',
      placeholder: '3000',
      validation: [
        { validator: isNotEmpty, alarm: 'postcode is required' },
        { validator: isPostcode, alarm: 'Post code is invalid' }
      ]
    },
    contactNumber: {
      type: 'text',
      label: 'contact number',
      placeholder: '0400 123 456',
      validation: [
        { validator: isNotEmpty, alarm: 'contact number is required' },
        { validator: isPhone, alarm: 'phone number is invalid' }
      ]
    }
  };
  return (
    <FormWrapper>
      {Object.keys(FORM_LIST).map(key => {
        return (
          <DetailItem
            key={key}
            name={key}
            type={FORM_LIST[key].type}
            label={FORM_LIST[key].label}
            placeholder={FORM_LIST[key].placeholder}
            validations={FORM_LIST[key].validation}
            input={detail[key] || ''}
            //fix the warning from https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
            handleDetail={handleDetail}
          />
        );
      })}
    </FormWrapper>
  );
};

DetailForm.propTypes = {
  detail: PropTypes.object,
  handleDetail: PropTypes.func.isRequired
};

export default DetailForm;
