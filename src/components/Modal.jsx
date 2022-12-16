import React from 'react';
import styled from 'styled-components';
import municipio from '../assets/municipios.json';
import Map from './Map';

const Modal = ({ location, openModal }) => {
  const { latitude, longitude } = municipio.find(
    (item) => item.codigo_ibge === location,
  );

  function handleOutside(e) {
    if (e.target === e.currentTarget) {
      openModal(false);
    }
  }

  return (
    <StyledModal onClick={(e) => handleOutside(e)}>
      <button onClick={() => openModal(false)}>Fechar</button>
      <Map lat={latitude} long={longitude} />
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  & button {
    background-color: #f44336;
    @media (max-width: 730px) {
      position: absolute;
      z-index: 1000;
      border-radius: 0;
      top: 0px;
      right: 0px;
    }
  }
`;
