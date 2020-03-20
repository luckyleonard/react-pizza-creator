import {
  isNotEmpty,
  isEmail,
  isEqual,
  isAddress,
  isPostcode,
  isPhone
} from '../validators';

export const VALIDATION = {
  name: [{ validator: isNotEmpty, alarm: 'name is required' }],
  email: [
    { validator: isNotEmpty, alarm: 'email is required' },
    { validator: isEmail, alarm: 'Email address is invalid' }
  ],
  confirmEmail: email => [
    { validator: isNotEmpty, alarm: 'email is required' },
    {
      validator: value => isEqual(value, email),
      alarm: 'confirm Email address is not match'
    }
  ], // set confirmEmail as a function rather than an array to recieve argument
  address: [
    { validator: isNotEmpty, alarm: 'address is required' },
    { validator: isAddress, alarm: 'Min of 3 characters' }
  ],
  postcode: [
    { validator: isNotEmpty, alarm: 'postcode is required' },
    { validator: isPostcode, alarm: 'Post code is invalid' }
  ],
  contactNumber: [
    { validator: isNotEmpty, alarm: 'contact number is required' },
    { validator: isPhone, alarm: 'phone number is invalid' }
  ]
};

export default detail => {
  let noError = true;

  Object.keys(VALIDATION).forEach(key => {
    const value = detail[key];
    let validators = VALIDATION[key];

    if (key === 'confirmEmail') {
      validators = validators(detail.email);
    }

    validators.forEach(({ validator }) => {
      if (!validator(value)) {
        noError = false;
      }
    }); // validator need to {}destructure to get from object

    // if (validators.filter(({ validator }) => !validator(value)).length !== 0) {
    //   noError = false;
    // }
  });

  return noError;
};
