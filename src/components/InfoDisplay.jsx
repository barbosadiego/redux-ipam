import React, { useState } from 'react';
import Modal from './Modal';

const InfoDisplay = ({ data }) => {
  // hook para gerenciar a exibição do
  // componente Modal
  const [openModal, setOpenModal] = useState(false);

  // caso não haja dados recebidos
  // via props não será exibido nada
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
      <button onClick={() => setOpenModal(true)}>Abrir mapa</button>
      {openModal && (
        <Modal location={data[0].municipio.id} openModal={setOpenModal} />
      )}
    </div>
  );
};

export default InfoDisplay;
