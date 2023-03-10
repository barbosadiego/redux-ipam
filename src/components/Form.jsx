import React from 'react';
import styled from 'styled-components';

const Form = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;

  & select {
    padding: 0.5rem;
  }
`;
