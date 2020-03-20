const REGEX_LIST = {
  email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
  address: /^.{3,}$/,
  postcode: /^\d{4}$/,
  contactNumber: /^(?:(?:61)|(?:0))?([23478])(\d{4})(\d{4})$/
};

export const isNotEmpty = value => value.trim().length !== 0;

export const isEmail = value => REGEX_LIST.email.test(value);

export const isEqual = (value, target) => value === target;

export const isAddress = value => REGEX_LIST.address.test(value);

export const isPostcode = value => REGEX_LIST.postcode.test(value);

export const isPhone = value => REGEX_LIST.contactNumber.test(value);
