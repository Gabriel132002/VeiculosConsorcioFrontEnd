import React, { useState } from 'react';
import FormUser from './component/User';
import Vehicles from './component/Vehicles';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('user');

  const handleButtonClick = () => {
    setCurrentComponent('vehicles');
  };

  const handleBackButtonClick = () => {
    setCurrentComponent('user')
  }

  return (
    <div>
      {currentComponent === 'user' ? (
        <FormUser handleButtonClick={handleButtonClick}/>
      ) : (
        <Vehicles handleBackButtonClick={handleBackButtonClick}/>
      )}
      
    </div>
  );
};

export default App;
