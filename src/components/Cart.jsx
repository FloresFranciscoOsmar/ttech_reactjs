import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, handleDeleteProduct, handleDeleteCart } = useContext(CartContext);

    if (cart.length === 0) return <p>Tu carrito está vacío</p>;

    return (
        <div>
            <h2>Carrito</h2>
            {cart.map(item => (
                <div key={item.id} style={{ marginBottom: '1rem' }}>
                    <p>{item.title} x {item.quantity}</p>
                    <button className='bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:bg-blue-700 text-center' onClick={() => handleDeleteProduct(item.id)}>Eliminar</button>
                </div>
            ))}
            <button className='bg-rose-500 text-white px-3 py-1 rounded mt-2 hover:bg-rose-700' onClick={handleDeleteCart}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;