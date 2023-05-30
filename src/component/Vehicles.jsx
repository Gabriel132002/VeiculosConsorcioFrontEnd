// import React from 'react'
// import './Vehicles.css'


// const Vehicles = ({ handleBackButtonClick, addToCart }) => {
//   const vehicleList = [
//     {id: 1, name: 'Civic', price: 200000},
//     {id: 2, name: 'City', price: 150000},
//     {id: 3, name: 'Hrv', price: 130000}
//   ]
//   return (
//     <body>
//       <div className='container'>
//         <header>
//           <h1 className='title-vehicles'>Bem vindo à loja online da honda</h1>
//         </header>
        
//         <main>
//           <section>
//             <div>
//               <h2>Carros</h2>
//               <p>Escolha um modelo que te agrade</p>

//               <ul>
//                 <li>
                  
//                 </li>
//                 <li>
                  
//                 </li>
//                 <li>
                  
//                 </li>
//               </ul>

//             </div>
//           </section>
//         </main>
//           <button type='button' className='button-back-container' onClick={handleBackButtonClick}>Voltar</button>
//       </div>
//     </body>
//   )
// }

// export default Vehicles

import React, { useState } from 'react';
import Notification from './Notification';
import './Vehicles.css';
import './Notification';

const Vehicles = ({ handleBackButtonClick, handleAddToCart }) => {
  const [showNotification, setShowNotification] = useState(false);

  const vehicleList = [
    { id: 1, name: 'Civic', price: 200000 },
    { id: 2, name: 'Hrv', price: 130000 },
    { id: 3, name: 'City', price: 150000 },
  ];

  const handleAddToCartClick = (vehicle) => {
    handleAddToCart(vehicle);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleCloseNotificatio = () => {
    setShowNotification(false)
  }

  return (
    <div>
      <h2>Veículos disponíveis</h2>
      <main>
        <section>
          <div>
            <ul>
              {vehicleList.map((vehicle) => (
                <li key={vehicle.id}>
                  {vehicle.name} - R${vehicle.price}
                  <button className="btn-add-cart" onClick={() => handleAddToCartClick(vehicle)}>
                    Adicionar ao Carrinho
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <button onClick={handleBackButtonClick}>Voltar</button>

      {showNotification && <Notification message="Carro adicionado ao carrinho" onClose={handleCloseNotificatio}/>}
    </div>
  );
};

export default Vehicles;
