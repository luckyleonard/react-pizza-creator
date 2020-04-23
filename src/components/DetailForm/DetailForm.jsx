import React from 'react';
import PropTypes from 'prop-types';
import { FormWrapper } from './style';
import { VALIDATION } from '../../utils/validationData';
import DetailInput from './components/DetailInput';

const DetailForm = ({ detail, handleDetail, formDirty }) => {
  const FORM_LIST = {
    name: {
      type: 'text',
      label: 'name',
      placeholder: 'John Smith',
      validation: VALIDATION.name,
    },
    email: {
      type: 'text',
      label: 'email',
      placeholder: 'Enter your email',
      validation: VALIDATION.email,
    },
    confirmEmail: {
      type: 'text',
      label: 'confirm',
      placeholder: 'Confirm your email',
      validation: VALIDATION.confirmEmail(detail.email),
      //for get the current detail.email every time during the detail form rerender
    },
    address: {
      type: 'text',
      label: 'address',
      placeholder: '44 Pizza Street',
      validation: VALIDATION.address,
    },
    postcode: {
      type: 'text',
      label: 'postcode',
      placeholder: '3000',
      validation: VALIDATION.postcode,
    },
    contactNumber: {
      type: 'text',
      label: 'contact number',
      placeholder: '0400123456',
      validation: VALIDATION.contactNumber,
    },
  };
  return (
    <FormWrapper>
      {Object.keys(FORM_LIST).map((key) => {
        return (
          <DetailInput
            key={key}
            name={key}
            type={FORM_LIST[key].type}
            label={FORM_LIST[key].label}
            placeholder={FORM_LIST[key].placeholder}
            validations={FORM_LIST[key].validation}
            input={detail[key] || ''}
            //fix the warning from https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
            handleDetail={handleDetail}
            formDirty={formDirty}
          />
        );
      })}
    </FormWrapper>
  );
};

DetailForm.propTypes = {
  detail: PropTypes.object,
  handleDetail: PropTypes.func.isRequired,
  formDirty: PropTypes.bool.isRequired,
};

export default DetailForm;
