import React, { useState } from 'react';
import FormUser from './component/User';
import Vehicles from './component/Vehicles';
import Cart from './component/Cart';
import cartIcon from './assets/carrinho.png';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('user');
  const [cart, setCart] = useState([]);

  const handleButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClickUser = () =>{
    setCurrentComponent('user')
  }

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
      {currentComponent === 'user' ? (
        <FormUser handleButtonClick={handleButtonClick} />
      ) : currentComponent === 'vehicles' ? (
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
      ) : (
        <Cart
          cartItems={cart}
          handleBackButtonClick={handleBackButtonClick}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default App;
