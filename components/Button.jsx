import PropTypes from 'prop-types';

/**
 * 
 * @param {boolean} block Specifies if the button is full width
 * @param {string} children Button content
 * @param {string} className Element input will be styled according to class
 * @param {boolean} disabled Make buttons inactive
 * @param {function} onClick Fires on a mouse click on the element
 * @param {boolean} outline Remove all background images and colors on any button
 * @param {string} style Predefined button styles. Options: primary, secondary, success, danger, warning, info, light, dark, link
 * @param {string} type Button type. Options: button (default), submit, reset
 * @returns 
 */
const Button = ({
  block = false,
  children,
  className = '',
  disabled = false,
  onClick = () => {},
  outline = false,
  style = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn${style ? ` btn-${outline ? 'outline-' : ''}${style}` : ''}${block ? ' w-100' : ''}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  style: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
