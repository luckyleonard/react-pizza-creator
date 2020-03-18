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

// export const useValidator = validation => {
//   const [alarm, setAlarm] = useState('');

//   const setMessage = input => {
//     for (let item of validation) {
//       !item.validator(input) ? setAlarm(item.alarm) : setAlarm('');
//       if (!item.validator(input)) {
//         break;
//       }
//     }
//   };
//   return [alarm, setMessage];
// }; dont need an alarm state because it can calculate by input value
