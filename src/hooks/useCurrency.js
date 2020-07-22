import React, { Fragment, useState } from 'react';

const useCurrency = (label, stateInitial, options) => {
  // State custom hook
  const [state, updateState] = useState(stateInitial);

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select onChange={(e) => updateState(e.target.value)} value={state}>
        <option value=''>-- Select --</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  );

  // Return state, interface that modifies the state
  return [state, Select, updateState];
};

export default useCurrency;
