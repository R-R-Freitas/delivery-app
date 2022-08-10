import React from 'react';

function CheckoutTable() {
  const CheckoutTitles = [
    'Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover Item',
  ];

  const mockOrders = [
    { id: 1, name: 'Skol Lata 250ml', price: 2.2, quantity: 2 },
    { id: 2, name: 'Heineken 600ml', price: 7.5, quantity: 4 },
  ];

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
          {mockOrders.map(({ id, name, price, quantity }, index) => (
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
                { price.toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { (quantity * price).toFixed(2).replace('.', ',') }
              </td>
              <td>
                <button
                  type="button"
                  id={ id }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                  onClick={ () => console.log('a') }
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
