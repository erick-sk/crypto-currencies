import React from 'react';

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <div>
      <p>
        Price: <span>{result.PRICE}</span>
      </p>
      <p>
        High Day: <span>{result.HIGHDAY}</span>
      </p>
      <p>
        Low Day: <span>{result.LOWDAY}</span>
      </p>
      <p>
        Last 24h: <span>{result.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Last Update: <span>{result.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Quote;
