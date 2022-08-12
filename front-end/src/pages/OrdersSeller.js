import React from 'react';
import CardSalesProduct from '../components/CardSalesProducts';
import Navbar from '../components/Navbar';

const mockSales = [
  {
    id: 1,
    userId: 1,
    sellerId: 1,
    total_price: 'R$ 100,00',
    delivery_address: 'Rua A',
    delivery_number: '123',
    delivery_date: '10/10/2020',
    status: 'Pendente',
  },
  {
    id: 2,
    userId: 1,
    sellerId: 1,
    total_price: 'R$ 150,00',
    delivery_address: 'Rua B',
    delivery_number: '124',
    delivery_date: '11/10/2020',
    status: 'Preparando',
  },
  {
    id: 3,
    userId: 1,
    sellerId: 1,
    total_price: 'R$ 200,00',
    delivery_address: 'Rua C',
    delivery_number: '125',
    delivery_date: '12/10/2020',
    status: 'Entregue',
  },
];

function OrdersSeller() {
  return (
    <div>
      <Navbar item1="PRODUTOS" item2="MEUS PEDIDOS" />
      {mockSales && (
        mockSales.map((sale) => (
          <CardSalesProduct
            key={ sale.id }
            id={ sale.id }
            price={ sale.total_price }
            status={ sale.status }
            date={ sale.delivery_date }
          />
        ))
      )}
    </div>
  );
}

export default OrdersSeller;
