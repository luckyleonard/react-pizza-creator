import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';

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

  const changedDetail = 'test@email.com';

  test('call handleDetail function with onChange', () => {
    //done写在参数里,done就是回调函数，使测试的expect一定会执行
    // const handleDetail = (e) => {
    //   expect(e.target.value).toEqual(changedDetail);
    //   done();
    // };

    const handleDetail = jest.fn();
    // const handleDetail = sinon.spy();

    const { getByTestId } = render(
      <DetailInput
        type={FORM_DATA.type}
        label={FORM_DATA.label}
        placeholder={FORM_DATA.placeholder}
        validations={FORM_DATA.validation}
        name={FORM_DATA.name}
        input={FORM_DATA.input}
        formDirty={true}
        handleDetail={({ target: { value } }) => handleDetail(value)}
        //!!handleDetail 的mock方法一定要将input的值进行解构并赋给handleDetail函数 否则expect将会拦截到input事件，而不是input输入的值
      />
    );

    const detailInput = getByTestId('detail-input');
    fireEvent.change(detailInput, {
      target: { value: changedDetail },
    });
    expect(handleDetail).toHaveBeenCalledTimes(1);
    expect(handleDetail).toHaveBeenCalledWith(changedDetail);
    // sinon.assert.calledWith(handleDetail, changedDetail);
  });
});
