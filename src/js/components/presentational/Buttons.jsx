import React from 'react';
import PropTypes from 'prop-types';

const Buttons = props => (
    <div className="calc-buttons">
      {props.buttons.map(el => (
        <div
          key={el.id}
          className={el.className}
          data-sign={el.id}
          onClick={el.onClick}>
            {el.text}
        </div>
      ))}
    </div>
);


Buttons.propTypes = {
  buttons: PropTypes.array,
};

export default Buttons;
