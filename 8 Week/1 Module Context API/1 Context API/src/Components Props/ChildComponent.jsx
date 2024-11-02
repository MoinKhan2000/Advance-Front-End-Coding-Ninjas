import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ChildComponent = ({ color }) => {
  return (
    <div style={
      {
        border: `2px solid ${color}`,
        padding: '10px',
        width: '200px',
        margin: '10px',
        display: 'inline-block',
        color: color,
      }
    }>

      < GrandChildComponent color={color} />
    </div>
  );
}

export default ChildComponent;
