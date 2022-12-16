import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCidades from '../actionCreators/cidadesActions';
import fetchCidadeInfo from '../helpers/fetchCidadeInfo';
import Form from './Form';
import InfoDisplay from './InfoDisplay';

const CidadesDisplay = ({ id }) => {
  const [cidadeInfo, setCidadeInfo] = useState([]);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const cidadesArray = store.cidadesReducer.cidadesData;
  const inputRef = useRef();

  useEffect(() => {
    dispatch(getCidades(id));
    setCidadeInfo([]);
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const inputSelection = inputRef.current;
    const id = inputSelection.options[inputSelection.selectedIndex].value;
    const res = await fetchCidadeInfo(id);
    setCidadeInfo(res);
  }

  return (
    <div>
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
    </div>
  );
};

export default CidadesDisplay;
