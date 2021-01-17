import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

// prettier-ignore
const Button = ({
  name, clickHandler, wide, color,
}) => (
  <button
    type="button"
    className={`${styles.button}
                ${color ? null : styles.button_gray}
                ${wide ? styles.button_double : null}`}
    onClick={() => clickHandler(name)}
  >
    {name}
  </button>
);

Button.defaultProps = {
  color: false,
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
