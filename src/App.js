import React, { useState } from 'react';
import UserLogin from './component/UserLogin';
import FormUser from './component/User';
import Vehicles from './component/Vehicles';
import Cart from './component/Cart';
import cartIcon from './assets/carrinho.png';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('login');
  const [cart, setCart] = useState([]);

  const handleLoginSuccess = () => {
    setCurrentComponent('vehicles');
  };

  const handleButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClickUser = () => {
    setCurrentComponent('login');
  };

  const handleRegisterClick = () => {
    setCurrentComponent('register');
  };

  const handleAddToCart = (vehicle) => {
    setCart([...cart, vehicle]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCartItems);
  };

  const handleCartClick = () => {
    setCurrentComponent('cart');
  };

  return (
    <div>
      {currentComponent === 'login' ? (
        <UserLogin
          handleLoginSuccess={handleLoginSuccess}
          handleRegisterClick={handleRegisterClick}
        />
      ) : currentComponent === 'register' ? (
        <FormUser handleButtonClick={handleButtonClick} />
      ) : (
        <React.Fragment>
          <Vehicles
            handleBackButtonClickUser={handleBackButtonClickUser}
            handleAddToCart={handleAddToCart}
          />
          <img
            className="cart-icon"
            src={cartIcon}
            alt="Carrinho"
            onClick={handleCartClick}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
