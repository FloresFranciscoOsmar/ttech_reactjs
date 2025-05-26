import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Inicializa loading en true al principio
    const [error, setError] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    useEffect(() => {
        setIsAuth(false);
    }, []);
    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error en la respuesta de la red: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('La API no pudo cargar:', err);
                setError(true);
                setLoading(false);
            });
    }, []);

    const handleDeleteCart = () => {
        setCart([]);
    };

    const handleAddToCart = (product) => {
        const existInCart = cart.find(item => item.id === product.id);
        existInCart
            ? setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item))
            : setCart([...cart, { ...product, quantity: 1 }]);
    };

    const handleDeleteProduct = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const handleDecrementItem = (productId) => {
        setCart(prevCart => {
            // Encuentra el producto en el carrito
            const existingItem = prevCart.find(item => item.id === productId);

            if (!existingItem) {
                return prevCart; // Si no existe, no hacemos nada
            }

            // Si la cantidad es 1, lo eliminamos completamente del carrito
            if (existingItem.quantity === 1) {
                return prevCart.filter(item => item.id !== productId);
            } else {
                // Si la cantidad es mayor a 1, la decrementamos
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);
    const toggleCart = () => setIsCartOpen(prev => !prev); // Para alternar

    return (
        <CartContext.Provider value={{
            cart,
            handleDeleteCart,
            handleAddToCart,
            handleDeleteProduct,
            handleDecrementItem,
            isAuth,
            products,
            loading,
            error,
            isCartOpen,
            openCart,
            closeCart,
            toggleCart,

        }}>
            {children}
        </CartContext.Provider>
    );
};