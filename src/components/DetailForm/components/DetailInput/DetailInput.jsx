import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, ItemWrapper, Alarm } from '../../../DetailForm';

const DetailItem = ({
  type,
  label,
  placeholder,
  validations,
  name,
  input,
  formDirty,
  handleDetail,
}) => {
  const [changed, setChanged] = useState(false);

  // const alarm = validations.reduce((prevValue, currentValue) => {
  //   const { validator, alarm } = currentValue;
  //   if (validator(input)) {
  //     return prevValue;
  //   }
  //   return alarm;
  // }, undefined);

  let error = undefined;

  for (let validation of validations) {
    const { validator, alarm } = validation;

    if (!validator(input)) {
      error = alarm;
      break;
    }
  }
  // do validation every time when item rerender(onChange cause DetailForm rerender no matter which input change)
  // for the confirm Email always compare with the email

  const handleValueChange = (e) => {
    handleDetail(e);
    setChanged(true);
  };

  return (
    <ItemWrapper data-testid='detail-item'>
      <Label data-testid='detail-label'>
        {label}
        {error && (formDirty || changed) && (
          <Alarm data-testid='detail-error'>{error}</Alarm>
        )}
      </Label>
      <Input
        data-testid='detail-input'
        type={type}
        name={name}
        placeholder={placeholder}
        value={input}
        onChange={(e) => handleValueChange(e)}
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
  formDirty: PropTypes.bool.isRequired,
  handleDetail: PropTypes.func.isRequired,
};

export default DetailItem;
