import React from 'react';
import styled from 'styled-components';
import municipio from '../assets/municipios.json';
import Map from './Map';

const Modal = ({ data }) => {
  console.log(municipio[0]);
  return (
    <StyledModal>
      <Map />
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
