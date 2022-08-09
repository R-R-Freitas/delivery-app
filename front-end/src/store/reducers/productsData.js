import { SET_QUANTITY } from '../../services/constants';

const INITIAL_STATE = {};

const productsData = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
  case SET_QUANTITY:
    return ({
      ...state,
      [payload.id]: { quantity: payload.quantity, priceProduct: payload.priceProduct },
    });
  default:
    return state;
  }
};

export default productsData;
