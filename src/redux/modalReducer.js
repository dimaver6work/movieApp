import { MODAL_ERROR, MODAL_LOADER, MODAL_SUCCESS } from './types';

const initialState = {
  isVisible: false,
  name: null,
  data: null,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SUCCESS:
      return {
        ...state,
        modal: {
          ...state.modal,
          modalLoader: false,
          modalError: null,
          modalData: action.payload,
        },
      };
    case MODAL_ERROR:
      return {
        ...state,
        modal: {
          ...state.modal,
          modalLoader: false,
          modalError: action.payload,
          modalData: null,
        },
      };
    case MODAL_LOADER:
      return {
        ...state,
        modal: {
          ...state.modal,
          modalData: null,
          modalLoader: true,
        },
      };
    default:
      return state;
  }
};
