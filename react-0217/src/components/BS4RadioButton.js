import { useState } from 'react';

function BS4RadioButton(props) {
  const { type, name, value, checkedValue, fieldChangeHandler } = props;
  return (
    <>
      <input
        className="form-check-input"
        type="radio"
        name={name}
        value={value}
        checked={checkedValue === value}
        onChange={fieldChangeHandler}
        required
      />
      <span className="form-check-label">{value}</span>
    </>
  );
}

export default BS4RadioButton;
