import {
  GET_MUNICIPIO_FAILURE,
  GET_MUNICIPIO_STARTED,
  GET_MUNICIPIO_SUCCESS,
} from '../actionTypes/actionTypes';

const getCidades = (id) => {
  return (dispatch) => {
    dispatch(getCidadesStarted());

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`,
    )
      .then((res) => res.json())
      .then((json) => dispatch(getCidadesSuccess(json)))
      .catch((error) => dispatch(getCidadesFailure(error.message)));
  };
};

const getCidadesStarted = () => {
  return {
    type: GET_MUNICIPIO_STARTED,
  };
};

const getCidadesSuccess = (data) => {
  return {
    type: GET_MUNICIPIO_SUCCESS,
    payload: data,
  };
};

const getCidadesFailure = (error) => {
  return {
    type: GET_MUNICIPIO_FAILURE,
    payload: error,
  };
};

export default getCidades;
