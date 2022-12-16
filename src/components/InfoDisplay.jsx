import React from 'react';

const InfoDisplay = ({ data }) => {
  // console.log(data);

  if (!data[0]) return null;

  return (
    <div>
      <h2>Informações do município</h2>
      <p>
        Microrregião: <strong>{data[0].municipio.microrregiao.nome}</strong>
      </p>
      <p>
        Mesorregião:{' '}
        <strong>{data[0].municipio.microrregiao.mesorregiao.nome}</strong>
      </p>
      <p>
        UF:{' '}
        <strong>{data[0].municipio.microrregiao.mesorregiao.UF.nome}</strong>
      </p>
      <p>
        Região do Município:{' '}
        <strong>{data[0].municipio['regiao-imediata'].nome}</strong>
      </p>
    </div>
  );
};

export default InfoDisplay;
