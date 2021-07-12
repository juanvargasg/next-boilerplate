import PropTypes from 'prop-types';
import {validateDecimal, validateNumber} from "../../utilities/regex";

/**
 * Specifies an input field where the user can enter data.
 * @param {string?} autoComplete Specifies whether an <input> element should have autocomplete enabled. Default 'on', other values 'off'
 * @param {string?} className Element input will be styled according to class
 * @param {string?} classNameGroup Element div group will be styled according to class. Default: mb-3
 * @param {string?} error Show a description of the error in the input
 * @param {string?} helptext Provide additional explanation or context
 * @param {string?} id Specifies the id of an <input> element. If it is null, put the name
 * @param {string} label Defines a label for element
 * @param {int?} maxLength Specifies the maximum number of characters allowed in an <input> element. Default 256
 * @param {string} name Specifies the name of an <input> element
 * @param {function?} onBlur Fires the moment that the element loses focus
 * @param {function} onChange Fires the moment when the value of the element is changed
 * @param {string?} placeholder Specifies a short hint that describes the expected value of an <input> element
 * @param {boolean?} readonly Specifies that an input field is read-only. Default false
 * @param {string?} type Specifies the type <input> element to display. Default 'text', other types 'emai', 'number', 'password', 'search', 'tel', 'url'
 * @param {string} validation Perform the validation when doing keypress. Ej: number, decimal
 * @param {string} value Specifies the value of an <input> element
 * @returns Input component
 */
const Input = ({
  autoComplete = 'on',
  className = '',
  classNameGroup = 'mb-3',
  error = '',
  helpText = null,
  id = null,
  label,
  maxLength = 256,
  name,
  onBlur = null,
  onChange = () => {},
  placeholder = '',
  readonly = false,
  type = 'text',
  validation = null,
  value,
}) => {
  // handle input changes, in case of validations, it performs them.
  const handleChange = (e) => {
    const {target: {value, name}} = e;
    let valid = true;
    if (value.length > 0) {
      switch (validation) {
        case 'number':
          if (!validateNumber(value)) valid = false;
          break;
        case 'decimal':
          if (!validateDecimal(value)) valid = false;
          break;
        default:
          break;
      }
    }
    if (!valid) e.preventDefault();
    else onChange(name, value);
  }

  return (
    <div className={classNameGroup}>
      {!!label && <label className="form-label" htmlFor={name}>{label}</label>}
      <input
        autoComplete={autoComplete}
        className={`form-control ${className} ${error.length > 0 ? 'is-invalid' : ''}`}
        id={id || name}
        maxLength={maxLength}
        name={name}
        onBlur={onBlur}
        onChange={handleChange}
        placeholder={placeholder}
        readOnly={readonly}
        type={type}
        value={value}
      />
      {helpText && <small className="help-text">{helpText}</small>}
      {error && <small className="invalid-feedback">{error}</small>}
    </div>
  );
};

Input.propTypes = {
  autoComplete: PropTypes.oneOf(['on', 'off']),
  className: PropTypes.string,
  classNameGroup: PropTypes.string,
  error: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  type: PropTypes.string,
  validation: PropTypes.oneOf(['number', 'decimal']),
  value: PropTypes.string,
};

export default Input;
