import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import DetailInput from '../../components/DetailForm/components/DetailInput';
import { VALIDATION } from '../../utils/validationData';

describe('<DetailInput />', () => {
  afterEach(cleanup);

  const FORM_DATA = {
    name: 'email',
    type: 'text',
    label: 'email',
    placeholder: 'Enter your email',
    validation: VALIDATION.email,
    input: 'wrong email',
  };

  const expectedErrorMsg = 'Email address is invalid';

  test('render label,error message and input value ', () => {
    const { getByTestId } = render(
      <DetailInput
        type={FORM_DATA.type}
        label={FORM_DATA.label}
        placeholder={FORM_DATA.placeholder}
        validations={FORM_DATA.validation}
        name={FORM_DATA.name}
        input={FORM_DATA.input}
        formDirty={true}
        handleDetail={() => {}}
      />
    );

    expect(getByTestId('detail-label')).toHaveTextContent(FORM_DATA.label);
    expect(getByTestId('detail-error')).toHaveTextContent(expectedErrorMsg);
    expect(getByTestId('detail-input').value).toBe(FORM_DATA.input);
  });

  const handleDetail = jest.fn();

  const changedDetail = 'test@email.com';

  test('call handleDetail function with onChange', () => {
    const { getByTestId } = render(
      <DetailInput
        type={FORM_DATA.type}
        label={FORM_DATA.label}
        placeholder={FORM_DATA.placeholder}
        validations={FORM_DATA.validation}
        name={FORM_DATA.name}
        input={FORM_DATA.input}
        formDirty={true}
        handleDetail={handleDetail}
      />
    );

    const detailInput = getByTestId('detail-input');
    fireEvent.change(detailInput, {
      target: { value: changedDetail },
    });
    expect(handleDetail).toHaveBeenCalledTimes(1);
    expect(handleDetail).toHaveBeenCalledWith(changedDetail);
  });
});
