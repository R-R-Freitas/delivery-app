import { SET_QUANTITY } from '../../services/constants';

const INITIAL_STATE = {
  products: {},
};

const productsData = (state = INITIAL_STATE, actions) => {
  const { type, payload: { id, qtd } } = actions;

  switch (type) {
  case SET_QUANTITY:
    return ({
      ...state,
      [id]: qtd,
    });
  default:
    return state;
  }
};

export default productsData;
