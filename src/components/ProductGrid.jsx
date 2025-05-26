import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';
import Loading from './statics/Loading';

const ProductsGrid = () => {
    const { products, handleAddToCart, loading, error } = useContext(CartContext);

    if (loading) return(
        <div>
            <Loading/>
        </div>
    );
    if (error) return <p>Error al cargar productos</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                />
            ))}
        </div>
    );
};

export default ProductsGrid;