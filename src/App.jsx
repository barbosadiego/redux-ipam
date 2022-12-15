import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEstado } from './actionCreators/estadoActions';
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

  console.log(estadoId);

  // ao iniciar é aprensentado a informção de que os dados
  // estão sendo carregados.
  if (!estadosArray.length) return <h1>Carregando dados...</h1>;

  return (
    <>
      <h2>Selecione um Estado</h2>
      <form>
        <label htmlFor="estados">
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
        </label>
      </form>
    </>
  );
};

export default App;
