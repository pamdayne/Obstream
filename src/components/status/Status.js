import React from 'react';
import css from './Status.module.css';

function Status(props) {
  return (
    <div className={css.status}>
      <p className={css.text}>
        {props.status}
        <span className="dot"></span>
      </p>
    </div>
  );
}

export default Status;
