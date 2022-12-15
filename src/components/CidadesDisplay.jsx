import React from 'react';
import { useSelector } from 'react-redux';

const CidadesDisplay = ({ id }) => {
  const store = useSelector((store) => store);
  console.log(store.cidadesReducer);

  return <div>CidadesDisplay{id}</div>;
};

export default CidadesDisplay;
