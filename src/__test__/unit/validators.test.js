import {
  isNotEmpty,
  isEmail,
  isEqual,
  isAddress,
  isPostcode,
  isPhone,
} from '../../utils/validators';

describe('validators', () => {
  const details = {
    value: 'test case',
    email: 'test@gmail.com',
    comfirmEmail: 'test@gmail.com',
    address: '123 street',
    postCode: '1234',
    phone: '0412341234',
  };

  test('isNotEmpty, should return true with value', () => {
    const result = isNotEmpty(details.value);
    expect(result).toBeTruthy();
  });
  test('isNotEmpty, should return false with empty value', () => {
    const result = isNotEmpty('');
    expect(result).toBeFalsy();
  });

  test('isEmail, should return true with email', () => {
    const result = isEmail(details.email);
    expect(result).toBeTruthy();
  });

  test('isEqual, should return true with email and equal confirm email', () => {
    const result = isEqual(details.email, details.comfirmEmail);
    expect(result).toBeTruthy();
  });

  test('isAddress, should return true with address', () => {
    const result = isAddress(details.address);
    expect(result).toBeTruthy();
  });

  test('isPostcode, should return true with post code', () => {
    const result = isPostcode(details.postCode);
    expect(result).toBeTruthy();
  });

  test('isPhone, should return true with AU phone number', () => {
    const result = isPhone(details.phone);
    expect(result).toBeTruthy();
  });
});
