import {
  GET_ESTADO_FAILURE,
  GET_ESTADO_STARTED,
  GET_ESTADO_SUCCESS,
} from '../actionTypes/actionTypes';

export const getEstado = () => {
  return (dispatch) => {
    dispatch(getEstadoStarted());

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((res) => res.json())
      .then((json) => dispatch(getEstadoSuccess(json)))
      .catch((error) => dispatch(getEstadoFailure(error.message)));
  };
};

const getEstadoStarted = () => {
  return {
    type: GET_ESTADO_STARTED,
  };
};

const getEstadoSuccess = (data) => {
  return {
    type: GET_ESTADO_SUCCESS,
    payload: data,
  };
};

const getEstadoFailure = ({ error }) => {
  return {
    type: GET_ESTADO_FAILURE,
    payload: { error },
  };
};
