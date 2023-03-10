import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getEstado } from './actionCreators/estadoActions';
import CidadesDisplay from './components/CidadesDisplay';
import Form from './components/Form';
import Loading from './components/Loading';
import sortByName from './helpers/sortByName';

const App = () => {
  // hook para acesso ao store do Redux
  const store = useSelector((store) => store);
  // hook para o dispatch
  const dispatch = useDispatch();
  // hook para referenciar elementos do DOM
  const inputRef = useRef();
  const [estadoId, setEstadoId] = useState(null);

  // ordenar os estados alfabeticamente
  // através do método sort (função helper)
  const estadosArray = sortByName(store.estadoReducer.estadosData);

  // ao carregar este componente o useEffect
  // automaticamente faz o dispatch
  useEffect(() => {
    dispatch(getEstado());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    // acessar o select
    const itemSelected = inputRef.current;
    // selecionar o valor da option escolhida
    const id = itemSelected.options[itemSelected.selectedIndex].value;
    // definir um state para o id do estado
    setEstadoId(id);
  }

  // ao iniciar é aprensentado a informção de que os dados
  // estão sendo carregados.
  if (!estadosArray.length && !store.estadoReducer.error) return <Loading />;

  // caso ocorrar um erro no carregamento uma mensagem é exibida
  if (store.estadoReducer.error)
    return (
      <StyledApp>
        <p>Um erro ocorreu. Tente novamente mais tarde</p>
      </StyledApp>
    );

  return (
    <StyledApp>
      <Title>
        IPAM<span>consulta</span>IBGE
      </Title>
      <h2>Selecione um Estado</h2>
      <Form>
        <label htmlFor="estados"></label>
        <select ref={inputRef} name="estados" id="estados">
          {estadosArray.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </Form>
      {estadoId && <CidadesDisplay id={estadoId} />}
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 5rem);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: #777;

  & span {
    color: #222;
  }
`;
