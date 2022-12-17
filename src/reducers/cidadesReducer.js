import {
  GET_MUNICIPIO_FAILURE,
  GET_MUNICIPIO_STARTED,
  GET_MUNICIPIO_SUCCESS,
} from '../actionTypes/actionTypes';

const initialState = {
  loading: false,
  cidadesData: [],
  error: null,
};

const cidadesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_MUNICIPIO_STARTED:
      return {
        ...state,
        loading: true,
      };

    case GET_MUNICIPIO_SUCCESS:
      return {
        ...state,
        loading: false,
        cidadesData: payload,
        error: null,
      };

    case GET_MUNICIPIO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default cidadesReducer;
