/*
  import React, { useContext } from 'react';
  import GrandChildComponent from './GrandChildComponent';
  import colorContext from '../context';

  const ChildComponent = () => {

    //! 3. Using the context.
    const { color } = useContext(colorContext)

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

        < GrandChildComponent />
      </div>
    );
  }

  export default ChildComponent;

*/

import React from 'react';
import GrandChildComponent from './GrandChildComponent';
import colorContext from '../context';

const ChildComponent = () => {

  return (
    <colorContext.Consumer>
      {({ color }) => {
        return <div style={
          {
            border: `2px solid ${color}`,
            padding: '10px',
            width: '200px',
            margin: '10px',
            display: 'inline-block',
            color: color,
          }
        }>

          < GrandChildComponent />
        </div>
      }}
    </colorContext.Consumer>
  );
}

export default ChildComponent;
