import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCarShopLocalStorage } from '../services/functions';
import setTotalSum from '../store/actions';

function CheckoutTable() {
  const dispatch = useDispatch();

  const CheckoutTitles = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item',
  ];

  const [productsWithQtt, setProductsWithQtt] = useState([]);

  const totalCar = useCallback((productsLocalStorage) => {
    if (productsLocalStorage.length !== 0) {
      const reduce = productsLocalStorage.reduce((acc, item) => {
        const totalValueProduct = item.quantity * Number(item.price);

        return acc + totalValueProduct;
      }, 0);

      dispatch(setTotalSum(reduce));

      return reduce;
    }
  }, [dispatch]);

  const updateLocalStorage = useCallback((CurrQtt, idProduct, products) => {
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

    const RemoveQuantity = () => {
      const productLocalStorage = products.find((item) => item.id === idNumber);

      const { quantity: productQuantity } = productLocalStorage;
      const productQt = Number(productQuantity);

      return productQt > 0 ? (productQt - 1) : 0;
    };

    const newQtt = RemoveQuantity();

    updateLocalStorage(newQtt, idNumber, products);
  }, [updateLocalStorage]);

  useEffect(() => {
    const products = getCarShopLocalStorage();

    totalCar(products);

    return setProductsWithQtt(products);
  }, [totalCar]);

  return (
    <div>
      <h2>Finalizar Pedido</h2>
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
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { Number(price).toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { Number(price * quantity).toFixed(2).replace('.', ',') }
              </td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckoutTable;
