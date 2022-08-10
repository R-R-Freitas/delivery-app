import { SET_QUANTITY } from '../../services/constants';

const INITIAL_STATE = 0;

const productsData = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
  case SET_QUANTITY:
    return payload;
  default:
    return state;
  }
};

export default productsData;
