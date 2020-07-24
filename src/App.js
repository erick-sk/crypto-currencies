import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currency, saveCurrency] = useState('');
  const [cryptocurrency, saveCryptocurrency] = useState('');
  const [result, saveResult] = useState({});

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      // We avoided execution the first time
      if (currency === '') return;

      // consult to API get quote
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      const result = await axios.get(url);

      saveResult(result.data.DISPLAY[cryptocurrency][currency]);
    };
    quoteCryptocurrency();
  }, [currency, cryptocurrency]);

  return (
    <Container>
      <div>
        <Imagen src={imagen} alt='image crypto' />
      </div>
      <div>
        <Heading>Instant Results</Heading>
        <Form
          saveCurrency={saveCurrency}
          saveCryptocurrency={saveCryptocurrency}
        />

        <Quote result={result} />
      </div>
    </Container>
  );
}

export default App;
