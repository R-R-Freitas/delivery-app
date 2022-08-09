import { SET_QUANTITY } from '../../services/constants';

const setQuantityProduct = (payload) => ({
  type: SET_QUANTITY,
  payload,
});

export default setQuantityProduct;
