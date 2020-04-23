import { default as detailValidation } from '../../utils/validationData';

describe('validationData', () => {
  const detail = {
    name: 'test',
    email: 'test@gmail.com',
    confirmEmail: 'test@gmail.com',
    address: 'test street',
    postcode: '1234',
    contactNumber: '0449123456',
  };

  const errorDetail = {
    name: '',
    email: 'test@gma',
    confirmEmail: 'test@gmail.com',
    address: 'test street',
    postcode: '123',
    contactNumber: '012345678',
  };

  test('detailValidation(), should return true with right detail', () => {
    const result = detailValidation(detail);
    expect(result).toBe(true);
  });

  test('detailValidation(), should return false with error detail', () => {
    const result = detailValidation(errorDetail);
    expect(result).toBe(false);
  });
});
