import React, { useState } from 'react';
import FormUser from './component/User';
import Vehicles from './component/Vehicles';
import Cart from './component/Cart'

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('user');
  const [cart, setCart] = useState([]);

  const handleButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClick = () => {
    setCurrentComponent('user')
  };

  const handleAddToCart = (vehicle) => {
    setCart([...cart, vehicle])
  };

  const handleRemoveFromCart = (item) =>{
    const updateCartItems = cart.filter((cartItem) => cartItem !== item);
    setCart(updateCartItems)
  }

  return (
    <div>
      {currentComponent === 'user' ? (
        <FormUser handleButtonClick={handleButtonClick} />
      ) : currentComponent === 'vehicles' ? (
        <Vehicles
          handleBackButtonClick={handleBackButtonClick}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <Cart
          cartItems={cart}
          handleBackButtonClick={handleBackButtonClick}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}

      {/* <Vehicles/> */}
    </div>
  );
};

export default App;
