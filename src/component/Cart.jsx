const Cart = ({ cartItems, handleBackButtonClick, handleRemoveFromCart }) => {
    return (
      <div>
        <h2>Carrinho de Compras</h2>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>O carrinho está vazio.</p>
        )}
        <button onClick={handleBackButtonClick}>Voltar</button>
      </div>
    );
  };

export default Cart