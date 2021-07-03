import React from 'react';
import './status.css';

function Status(props) {
  return (
    <div className="status">
      <p className="text">
        {props.status}
        <span className={["icon", props.dot].join(" ")}></span>
      </p>
    </div>
  );
}

export default Status;
