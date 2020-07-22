import React, { Fragment, useState } from 'react';

const useCurrency = () => {
  // State custom hook
  const [state, updateState] = useState('');

  const Select = () => (
    <Fragment>
      <label>Currency</label>
      <select>
        <option value='PE'>Sol Peruvian</option>
      </select>
    </Fragment>
  );

  // Return state, interface that modifies the state
  return [state, Select, updateState];
};

export default useCurrency;
