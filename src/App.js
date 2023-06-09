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

  const handleRegisterClick = () => {
    setCurrentComponent('register');
  };

  const handleAddToCart = (vehicle) => {
    setCart((prevCart) => [...prevCart, vehicle]);
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem !== item));
  };

  const handleCartClick = () => {
    setCurrentComponent('cart');
  };

  const handleBackButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClickUser = () => {
    setCurrentComponent('login');
  };

  const handleButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  return (
    <div>
      {currentComponent === 'login' && (
        <UserLogin
          handleLoginSuccess={handleLoginSuccess}
          handleRegisterClick={handleRegisterClick}
        />
      )}
      {currentComponent === 'register' && (
        <FormUser handleButtonClick={handleButtonClick} />
      )}
      {currentComponent === 'vehicles' && (
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
      {currentComponent === 'cart' && (
        <Cart
          cartItems={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleBackButtonClick={handleBackButtonClick}
          setCart={setCart}
        />
      )}
    </div>
  );
};

export default App;
