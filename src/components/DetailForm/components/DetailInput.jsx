import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, ItemWrapper, Alarm } from '../style';

const DetailItem = ({
  type,
  label,
  placeholder,
  validations,
  name,
  input,
  verifing,
  handleDetail,
  handleVerifing
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

  if (verifing || changed) {
    handleVerifing(error);
  }

  const handleValueChange = e => {
    handleDetail(e);
    setChanged(true);
    handleVerifing(true);
  };

  return (
    <ItemWrapper>
      <Label>
        {label}
        {error && (verifing || changed) && <Alarm>{error}</Alarm>}
      </Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={input}
        onChange={e => handleValueChange(e)}
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

export default DetailItem;
