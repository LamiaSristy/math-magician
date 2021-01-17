import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

/* eslint-disable */
const Display = ({ total, next, operation }) => {
  return (
    <div className={styles.display}>
      <p className="mb-0 text-right w-100">{next || total}</p>
      <span className={styles.displaySubtitle}>
        {next && (total || null)} {operation || null}
      </span>
    </div>
  );
};

Display.defaultProps = {
  total: '0',
  next: undefined,
  operation: undefined,
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
