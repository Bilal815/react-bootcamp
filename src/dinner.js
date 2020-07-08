import React from 'react';
import './index.css';

function Dinner(props) {
  return (
    <div>
      <h1>Today we are serving {props.dishname}</h1>
    </div>
    )
}

export default Dinner;