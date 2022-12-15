import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCidades from '../actionCreators/cidadesActions';

const CidadesDisplay = ({ id }) => {
  const [cidadeId, setCidadeId] = useState(null);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const cidadesArray = store.cidadesReducer.cidadesData;
  const inputRef = useRef();

  useEffect(() => {
    dispatch(getCidades(id));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    const inputSelection = inputRef.current;
    const id = inputSelection.options[inputSelection.selectedIndex].value;
    setCidadeId(id);
  }

  console.log(cidadeId);
  return (
    <div>
      <h2>Selecione um município</h2>
      <form>
        <label htmlFor="municipios">
          <select ref={inputRef} name="municipios" id="municipios">
            {cidadesArray.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nome}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CidadesDisplay;
