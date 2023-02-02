import React from 'react';

const Operation = ({ handleClear, handleClick }) => {
  return (
    <div>
      <p>Operations</p>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Operation;
