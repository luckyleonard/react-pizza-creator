import React from 'react';
import { cleanup, render } from '@testing-library/react';
import DetailForm from '../../components/DetailForm';

describe('<DetailForm />', () => {
  afterEach(cleanup);

  const detail = {
    name: 'test',
    email: 'test@gmail.com',
    confirmEmail: 'test@gmail.com',
    address: 'test street',
    postcode: '1234',
    contactNumber: '0449123456',
  };

  test('renders all <DetailInput/>', () => {
    const { getAllByTestId } = render(
      <DetailForm detail={detail} formDirty={true} handleDetail={() => {}} />
    );

    const detailInputs = getAllByTestId('detail-item');
    expect(detailInputs.length).toBe(Object.keys(detail).length);
  });
});
