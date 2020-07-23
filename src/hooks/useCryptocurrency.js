import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Selected = styled.select`
  width: 100%;
  display: block;
  padding: 0.8rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  margin-top: 1rem;
`;

const useCryptocurrency = (label, stateInitial, options) => {
  console.log(options);

  // State custom hook
  const [state, updateState] = useState(stateInitial);

  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selected onChange={(e) => updateState(e.target.value)} value={state}>
        <option value=''>-- Select --</option>
        {/* {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))} */}
      </Selected>
    </Fragment>
  );

  // Return state, interface that modifies the state
  return [state, SelectCrypto, updateState];
};

export default useCryptocurrency;
