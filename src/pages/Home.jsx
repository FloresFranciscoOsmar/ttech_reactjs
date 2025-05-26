import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductsGrid from '../components/ProductGrid';
import Loading from '../components/statics/Loading';
const Home = () => {
    const { loading, error } = useContext(CartContext);
    if (loading) return (
        <div>
            <Loading />
        </div>
    );
    if (error) return <p>Error al cargar productos.</p>;

    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl text-center py-10 will-change-auto'>Bienvenidos a TiendaTuya</h1>
            <ProductsGrid />
        </div>
    );
};

export default Home;