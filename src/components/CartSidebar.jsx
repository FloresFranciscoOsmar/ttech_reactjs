// src/components/CartSidebar.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
    const { cart, handleDeleteProduct, handleDeleteCart, handleDecrementItem, handleAddToCart, isCartOpen, closeCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black z-40 transition-opacity duration-300"
                    onClick={closeCart}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 w-80 md:w-96 h-full bg-white shadow-lg z-50 transform transition-transform duration-300
                ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-2xl font-bold">Tu Carrito</h2>
                    <button
                        onClick={closeCart}
                        className="text-gray-500 hover:text-black hover:font-bold text-3xl leading-none cursor-pointer"
                    >
                        X
                    </button>
                </div>

                <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100% - 160px)' }}>
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">El carrito está vacío.</p>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                                <div className="flex items-center gap-3">
                                    <img src={item.images?.[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                                    <div>
                                        <h3 className="font-semibold text-sm">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-5 bg-blue-400 rounded-2xl px-2'>
                                    <button onClick={()=>handleAddToCart(item)}>➕</button>
                                    <button onClick={()=>handleDecrementItem(item.id)}>{item.quantity === 1 ? "🗑️" : "➖"}</button>
                                </div>
                                <button
                                    onClick={() => handleDeleteProduct(item.id)}
                                    className="text-red-500 hover:text-red-700 ml-4"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
                        <div className="flex justify-between font-bold text-lg mb-4">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <button
                            onClick={handleDeleteCart}
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition mb-2"
                        >
                            Vaciar Carrito
                        </button>
                        <Link
                            to="/checkout" // falta implementar en caso que concretemos la venta.
                            className="block text-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                            onClick={closeCart} 
                        >
                            Finalizar Compra
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
