import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Fira Sans', sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
  }

  button{
    padding: 0.5rem 1rem;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s;

    &:active{
      box-shadow: 0 0 0 3px rgba(0,0,0,0.3);
    }

    @media (min-width: 1100px){
      &:hover{
        opacity: 0.9;
      }
    }
  }

  .leaflet-container{
    width: 700px;
    height: 700px;

    @media screen and (max-width: 730px){
      width: 100vw;
      height: 100vh;
    }
  }
`;

export default GlobalStyle;
