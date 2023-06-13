import React from 'react';

const Profit = ({ carSales }) => {
  return (
    <div>
      <h2>Lucro por Venda de Carro</h2>
      <ul>
        {carSales.map((sale, index) => (
          <li key={index}>
            <p>Valor da venda: R${sale.price}</p>
            <p>Custo do carro: R${sale.cost}</p>
            <p>Lucro: R${sale.price - sale.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profit;
