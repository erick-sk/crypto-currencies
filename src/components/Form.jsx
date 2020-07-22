import React from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = () => {
  const CURRENCIES = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  // Use userCurrency
  const [currency, SelectCurrency] = useCurrency(
    'Choose your currency',
    '',
    CURRENCIES
  );
  // Use useCryptocurrency
  const [cryptocurrency, SelectCryptocurrency] = useCryptocurrency(
    'Choose your cryptocurency',
    ''
  );
  return (
    <form>
      <SelectCurrency />

      <SelectCryptocurrency />

      <Button type='submit' value='Calculate' />
    </form>
  );
};

export default Form;
