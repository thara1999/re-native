import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  data: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const store = createStore(dataReducer, applyMiddleware(thunk));
