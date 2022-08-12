import React from 'react';
import Navbar from '../components/Navbar';
import TableDetailOrder from '../components/TableDetailOrder';

function OrdersDetail() {
  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      <div>
        <p>Detalhes do pedido</p>
        <div>
          <div>
            <p>PEDIDO</p>
            <p>P.Vend</p>
            <p>{}</p>
            <p>{}</p>
            <button
              type="button"
            >
              MARCAR COMO ENTREGUE

            </button>
          </div>
        </div>
        <div>
          <TableDetailOrder />
        </div>
      </div>
    </div>
  );
}

export default OrdersDetail;
