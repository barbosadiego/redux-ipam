import {
  GET_ESTADO_FAILURE,
  GET_ESTADO_STARTED,
  GET_ESTADO_SUCCESS,
} from '../actionTypes/actionTypes';

const initialState = {
  loading: false,
  estadosData: [],
  error: null,
};

const estadoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ESTADO_STARTED:
      return {
        ...state,
        loading: true,
      };

    case GET_ESTADO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        estadosData: payload,
      };

    case GET_ESTADO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default estadoReducer;
