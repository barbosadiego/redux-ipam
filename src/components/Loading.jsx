import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <StyledLoading>
      <div></div>
    </StyledLoading>
  );
};

export default Loading;

const rotate = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  & > div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 10px solid black;
    border-right-color: transparent;
    animation: ${rotate} 1s linear infinite;
  }
`;
