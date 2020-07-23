import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import axios from 'axios';

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
  // State list cryptocurrency
  const [listCrypto, saveCryptocurrencies] = useState([]);
  const [error, saveError] = useState(false);

  const CURRENCIES = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'Pound Sterling' },
  ];

  // Use userCurrency
  const [currency, SelectCurrencies] = useCurrency(
    'Choose your currency',
    '',
    CURRENCIES
  );
  // Use useCryptocurrency
  const [cryptocurrency, SelectCrypto] = useCryptocurrency(
    'Choose your cryptocurency',
    '',
    listCrypto
  );

  // Call to API
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const result = await axios.get(url);
      saveCryptocurrencies(result.data.Data);
    };
    consultAPI();
  }, []);

  // When user click submit
  const quoteCurrency = (e) => {
    e.preventDefault();

    // Validation both label exist
    if (currency === '' || cryptocurrency === '') {
      saveError(true);
      return;
    }

    // pass data to main component
    saveError(false);
  };

  return (
    <form onSubmit={quoteCurrency}>
      {error ? 'Theres is a mistake' : null}

      <SelectCurrencies />

      <SelectCrypto />

      <Button type='submit' value='Calculate' />
    </form>
  );
};

export default Form;
