import React from 'react';

function Input({ value, handleChange }) {
  return (
    <div>
      <p style={{ color: 'white' }}>Inputs</p>
      <input
        type="number"
        name="input1"
        placeholder="Enter integer number"
        value={value.input1}
        onChange={handleChange}
      />
      <input
        type="number"
        name="input2"
        placeholder="Enter integer number"
        value={value.input2}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
