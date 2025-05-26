import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from './modals/ImageModal';
const ProductCard = ({ product, onAddToCart }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageZoom = () => {
        setSelectedImage(product);
    };

    const closeImageZoom = () => {
        setSelectedImage(null);
    };

    return (
        <div className="p-4 rounded shadow- hover:shadow-md transition flex flex-col bg-gray-200">
            <Link to={`/product/${product.id}`} className="block">
                <h3 className="text-xl font-medium mb-2 text-center hover:text-blue-600 transition-colors">
                    {product.title}
                </h3>
            </Link>

            <div
                className="relative w-full h-40 object-cover mb-2 rounded-2xl cursor-pointer overflow-hidden group"
                onClick={openImageZoom} 
            >
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">Ampliar imagen</span>
                </div>
            </div>
            <p className="text-gray-700 font-bold text-center">${product.price}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:bg-blue-700 transition self-center" // self-center para centrar el botón
            >
                Agregar al carrito
            </button>

            {selectedImage && (
                <ImageModal
                    image={{ src: selectedImage.images?.[0], alt: selectedImage.title }}
                    onClose={closeImageZoom}
                />
            )}
        </div>
    );
};

export default ProductCard;