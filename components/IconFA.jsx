const IconFA = ({ name, type = 'fas', className = '' }) => (
  <i className={`${type} fa-${name} ${className}`} aria-hidden="true" />
);

export default IconFA;
