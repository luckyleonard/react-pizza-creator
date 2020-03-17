import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormWrapper, ItemWrapper, Alarm } from './style';
import {
  isNotEmpty,
  isEmail,
  getTarget,
  isEqual,
  isAddress,
  isPostcode,
  isPhone,
  useValidator
} from '../../utils/useValidator';

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
        validator: isEqual,
        alarm: 'confirm Email address is not match',
        target: getTarget
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

const DetailItem = ({
  type,
  label,
  placeholder,
  validation,
  name,
  input,
  handleVerified,
  handleDetail
}) => {
  const [alarm, setMessage] = useValidator(validation);
  const handleInput = e => {
    setMessage(e.target.value, input['email']);
    handleDetail(e);
  };

  useEffect(() => {
    if (alarm !== '') {
      handleVerified(false);
    }
  }, [alarm, handleVerified]);

  return (
    <ItemWrapper>
      <Label>
        {label}
        <Alarm>{alarm}</Alarm>
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={input[name] || ''} //fix the warning from https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
        onBlur={handleInput}
        onChange={handleInput}
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
  input: PropTypes.object,
  handleVerified: PropTypes.func.isRequired,
  handleDetail: PropTypes.func.isRequired
};

const DetailForm = ({ detail, handleVerified, handleDetail }) => {
  return (
    <FormWrapper>
      {Object.keys(FORM_LIST).map(key => {
        return (
          <DetailItem
            key={key}
            name={key}
            {...FORM_LIST[key]}
            input={detail}
            handleVerified={handleVerified}
            handleDetail={handleDetail}
          />
        );
      })}
    </FormWrapper>
  );
};

DetailForm.propTypes = {
  detail: PropTypes.object,
  handleVerified: PropTypes.func.isRequired,
  handleDetail: PropTypes.func.isRequired
};

export default DetailForm;
