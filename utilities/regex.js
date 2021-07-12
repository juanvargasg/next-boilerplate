export const DECIMAL_REGEX = /^\d+\.?\d{0,2}$/i;
export const DECIMAL3_REGEX = /^\d+\.?\d{0,3}$/i;
export const NUMBER_REGEX = /^[0-9]*$/i;
export const STRING_REGEX = /[^a-z A-Z]/;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const RFC_REGEX = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
export const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.&*_])(?=.{5,10})/;
export const MAC_ADDRESS_REGEX = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

export const validateDecimal = (value, numbersOfDecimals = 2) => {
  if (numbersOfDecimals === 2) {
    return value.match(DECIMAL_REGEX);
  }
  return value.match(DECIMAL3_REGEX);
};
export const validateNumber = (value) => value.match(NUMBER_REGEX);
export const validateString = (value) => value.match(STRING_REGEX);
export const validateEmail = (value) => value.match(EMAIL_REGEX);
export const validateRfc = (value) => value.match(RFC_REGEX);
export const validatePass = (value) => value.match(PASS_REGEX);
export const validateMacAddress = (value) => value.match(MAC_ADDRESS_REGEX);
