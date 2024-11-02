import React, { useContext } from 'react';
import colorContext from '../context';

// 3. Using the context.
const GrandChildComponent = () => {
  const { color } = useContext(colorContext)

  return (
    <div>
      Color : {color}
    </div>
  );
}

export default GrandChildComponent;
