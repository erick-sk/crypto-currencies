import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
  color: #fff;
`;
const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ResultDiv>
      <Price>
        Price: <span>{result.PRICE}</span>
      </Price>
      <Info>
        High Day: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Low Day: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Last 24h: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Last Update: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultDiv>
  );
};

export default Quote;
