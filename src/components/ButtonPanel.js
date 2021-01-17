import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import styles from './styles.module.css';

const ButtonPanel = ({ buttons, clickHandler }) => {
  const differentColors = ['÷', '+', 'X', '-', '=', 'รท'];
  const divList = [];
  buttons.forEach(row => {
    const list = [];
    row.forEach(button => {
      const wide = button === '0' ? true : undefined;
      const color = differentColors.includes(button) ? true : undefined;
      list.push(
        <Button
          name={button}
          clickHandler={buttonName => clickHandler(buttonName)}
          key={button}
          wide={wide}
          color={color}
        />,
      );
    });

    divList.push(
      <div className={styles.button_panel_row} key={`row${row[0]}`}>{list}</div>,
    );
  });

  return (
    <div className={styles.button_panel}>
      {divList}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default ButtonPanel;
