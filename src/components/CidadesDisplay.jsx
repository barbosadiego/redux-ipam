import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import getCidades from '../actionCreators/cidadesActions';
import fetchCidadeInfo from '../helpers/fetchCidadeInfo';
import Form from './Form';
import InfoDisplay from './InfoDisplay';

const CidadesDisplay = ({ id }) => {
  // estado local usado no component InfoDisplay
  // por se tratar de informação com escopo local
  // não fica armazenada no store do Redux
  const [cidadeInfo, setCidadeInfo] = useState([]);
  // acesso a store do Redux
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  // acesso mais conveniente aos dados das cidades
  const cidadesArray = store.cidadesReducer.cidadesData;
  // hook para referenciar o select
  const inputRef = useRef();
  // armazenar eventual erro
  const loadingError = store.cidadesReducer.error;

  useEffect(() => {
    // ao início e atualização do id
    // é disparado o método getCidades
    // no cidadesActions.js
    dispatch(getCidades(id));
    // ao atualizar o estado (id props)
    // limpa a relação dos municípios
    setCidadeInfo([]);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    // acessar o select
    const inputSelection = inputRef.current;
    // selecionar o valor da option escolhida (município)
    const id = inputSelection.options[inputSelection.selectedIndex].value;
    try {
      // com o id do município é feito o fetch do dados
      const res = await fetchCidadeInfo(id);
      // aqui o resultado do fetch é saldo
      // no estado local CidadesInfo
      setCidadeInfo(res);
    } catch (error) {
      // em caso de erro é exibido uma mensagem
      // no console do navegador
      console.log(error);
    }
  }

  // caso ocorra algun erro no carregamento dos dados
  // será renderizada uma mensagem ao usuário
  if (loadingError) {
    return (
      <p>Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.</p>
    );
  }

  return (
    <StyledCidadesDisplay>
      <h2>Selecione um município</h2>
      <Form>
        <label htmlFor="municipios"></label>
        <select ref={inputRef} name="municipios" id="municipios">
          {cidadesArray.map((item) => (
            <option key={item.id} value={item.id}>
              {item.nome}
            </option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </Form>
      {cidadeInfo && <InfoDisplay data={cidadeInfo} />}
    </StyledCidadesDisplay>
  );
};

export default CidadesDisplay;

const StyledCidadesDisplay = styled.div`
  text-align: center;
`;
