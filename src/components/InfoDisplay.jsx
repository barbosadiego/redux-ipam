import React from 'react';

const InfoDisplay = ({ data }) => {
  // console.log(data);

  if (!data[0]) return null;

  return (
    <div>
      <h2>Informações do município</h2>
      <p>microrregião: {data[0].municipio.microrregiao.nome}</p>
      <p>mesorregião: {data[0].municipio.microrregiao.mesorregiao.nome}</p>
      <p>UF: {data[0].municipio.microrregiao.mesorregiao.UF.nome}</p>
      <p>região do município: {data[0].municipio['regiao-imediata'].nome}</p>
    </div>
  );
};

export default InfoDisplay;
