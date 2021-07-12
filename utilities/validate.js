import {
  validateDecimal,
  validateEmail,
  validateNumber,
  validateString,
  validatePass,
  validateRfc,
  validateMacAddress,
} from './regex';

const required = (value) => {
  if (typeof value !== 'string') {
    value = value.toString();
  }
  if (value.trim().length === 0) {
    return false;
  }
  return true;
};

const doValidations = (rules = []) => {
  const errors = {};
  let valid = true;

  rules.forEach((r) => {
    if (
      !r.hasOwnProperty('name')
      || !r.hasOwnProperty('value')
      || !r.hasOwnProperty('validations')
    ) {
      return;
    }
    for (const key in r.validations) {
      if (r.validations[key]) {
        switch (key) {
          case 'required':
            if (!required(r.value)) {
              errors[r.name] = 'Este campo es requerido';
              valid = false;
            }
            break;
          case 'length':
            if (required(r.value) && r.value.length !== r.validations[key]) {
              errors[r.name] = `Este campo debe ser de ${r.validations[key]} digitos.`;
              valid = false;
            }
            break;
          case 'lengthLessThan':
            if (required(r.value) && r.value.length > r.validations[key]) {
              errors[r.name] = `Este campo debe ser de ${r.validations[key]} digitos o menos.`;
              valid = false;
            }
            break;
          case 'email':
            if (required(r.value) && !validateEmail(r.value)) {
              errors[r.name] = 'Formato incorrecto de E-mail.';
              valid = false;
            }
            break;
          case 'rfc':
            if (required(r.value) && !validateRfc(r.value)) {
              errors[r.name] = 'Formato incorrecto de RFC.';
              valid = false;
            }
            break;
          case 'decimal':
            if (required(r.value) && !validateDecimal(r.value, r.validations[key])) {
              errors[r.name] = 'No es un numero decimal.';
              valid = false;
            }
            break;
          case 'number':
            if (required(r.value) && !validateNumber(r.value)) {
              errors[r.name] = 'No es un numero.';
              valid = false;
            }
            break;
          case 'password':
            if (required(r.value) && !validatePass(r.value)) {
              errors[r.name] = 'Debe tener de 5 a 10 caracteres, 1 letra mayúscula, 1 letra minúscula, 1 número y 1 signo (! @ # $ % & * . _)';
              valid = false;
            }
            break;
          case 'macAddress':
            if (required(r.value) && !validateMacAddress(r.value)) {
              errors[r.name] = 'Formato incorrecto de mac address';
              valid = false;
            }
            break;
          case 'greaterThan':
            if (
              required(r.value)
              && validateDecimal(r.value, r.validations[key])
              && r.value <= r.validations[key]
            ) {
              errors[r.name] = `El valor debe ser mayor que ${r.validations[key]}.`;
              valid = false;
            }
            break;
          case 'equalTo':
            if (required(r.value) && r.value !== r.validations[key]) {
              errors[r.name] = 'Los datos no coinciden.';
              valid = false;
            }
            break;
          case 'differentTo':
            if (required(r.value) && r.value === r.validations[key]) {
              errors[r.name] = 'No puede ser igual al campo anterior';
              valid = false;
            }
            break;
          case 'string':
            if (required(r.value) && validateString(r.value)) {
              errors[r.name] = 'Este campo solo permite letras';
              valid = false;
            }
            break;
          case 'miniumLength':
            if (required(r.value) && r.value.length < r.validations.miniumLength) {
              errors[r.name] = 'Favor de poner un nombre valido';
              valid = false;
            }
            break;
          default:
            break;
        }
      }
    }
  });

  return { errors, valid };
};

export default doValidations;
