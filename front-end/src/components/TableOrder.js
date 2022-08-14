import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarShopLocalStorage } from '../services/functions';
import setTotalSum from '../store/actions';

function TableOrder({ isCheckout }) {
  const dispatch = useDispatch();
  const dataTotalSum = useSelector(({ totalSum }) => totalSum);

  const CheckoutTitles = isCheckout ? [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item',
  ] : [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total',
  ];

  const [productsWithQtt, setProductsWithQtt] = useState([]);
  const [haveButton] = useState(isCheckout);

  const totalCar = useCallback((productsLocalStorage) => {
    if (productsLocalStorage.length !== 0) {
      const reduce = productsLocalStorage.reduce((acc, item) => {
        const totalValueProduct = item.quantity * Number(item.price);

        return acc + totalValueProduct;
      }, 0);

      dispatch(setTotalSum(reduce));

      return reduce;
    }

    dispatch(setTotalSum(0));
  }, [dispatch]);

  const updateLocalStorage = useCallback((idProduct, products) => {
    const newProducts = products.filter((item) => item.id !== idProduct);

    const productsWithQuant = newProducts
      .filter(({ quantity }) => quantity !== 0);

    totalCar(productsWithQuant);

    localStorage.setItem('carShop', JSON.stringify(productsWithQuant));

    setProductsWithQtt(productsWithQuant);
  }, [totalCar]);

  const handleRemoveProduct = useCallback((idCurr) => {
    const idNumber = Number(idCurr);

    const products = getCarShopLocalStorage();

    updateLocalStorage(idNumber, products);
  }, [updateLocalStorage]);

  useEffect(() => {
    const products = getCarShopLocalStorage();

    totalCar(products);

    return setProductsWithQtt(products);
  }, [totalCar]);

  return (
    <div>
      { isCheckout ? (<h2>Finalizar Pedido</h2>) : '' }
      <table>
        <thead>
          <tr>
            {CheckoutTitles.map((title) => (
              <th key={ title }>{ title }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {productsWithQtt.map(({ id, name, price, quantity }, index) => (
            <tr key={ id }>
              <td
                data-testid={
                  isCheckout
                    ? `customer_checkout__element-order-table-item-number-${index}`
                    : `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  isCheckout
                    ? `customer_checkout__element-order-table-name-${index}`
                    : `customer_order_details__element-order-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  isCheckout
                    ? `customer_checkout__element-order-table-quantity-${index}`
                    : `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                { quantity }
              </td>
              <td
                data-testid={
                  isCheckout
                    ? `customer_checkout__element-order-table-unit-price-${index}`
                    : `customer_order_details__element-order-table-unit-price-${index}`
                }
              >
                { Number(price).toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={
                  isCheckout
                    ? `customer_checkout__element-order-table-sub-total-${index}`
                    : `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                { Number(price * quantity).toFixed(2).replace('.', ',') }
              </td>
              { haveButton && (
                <td>
                  <button
                    type="button"
                    id={ id }
                    data-testid={
                      `customer_checkout__element-order-table-remove-${index}`
                    }
                    onClick={ ({ target }) => handleRemoveProduct(target.id) }
                  >
                    Remover
                  </button>
                </td>
              ) }
            </tr>
          ))}
        </tbody>
      </table>
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Total: R$
        {' '}
        <span
          data-testid={
            isCheckout
              ? 'customer_checkout__element-order-total-price'
              : 'customer_order_details__element-order-total-price'
          }
        >
          {dataTotalSum.toFixed(2).replace('.', ',')}
        </span>
      </button>
    </div>
  );
}

TableOrder.propTypes = {
  isCheckout: PropTypes.bool,
}.isRequired;

export default TableOrder;
