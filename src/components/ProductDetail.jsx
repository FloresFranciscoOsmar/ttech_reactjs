import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
function ProductDetail() {
    const { id } = useParams();
    const { products, handleAddToCart} = useContext(CartContext);

    const product = products.find((p) => p.id === parseInt(id));
    if (!product) return (
        <div className='
            min-h-screen flex justify-center items-center'>
            <a className='text-4xl font-bold'>Producto no encontrado</a>
        </div>
    );

    return (
        <div className='
        min-h-screen p-10 '>
            <div className='h-1/2 bg-gray-200 w-6/10 mx-auto flex flex-col rounded-2xl p-10'>
                    <div className='flex flex-row w-full justify-center h-1/2'>
                    <img className=' w-1/2  rounded-2xl' src={product.images?.[0]} alt={product.title} />
                    <div className=' flex flex-col w-1/2 justify-center items-center gap-10 '>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center">
                            {product.title}
                        </h1>
                        <p className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600' >
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className='w-full h-1/2 flex flex-col items-center'>
                    <p className='text-center mx-10 mt-10 text-xl sm:text-xl lg:text-2xl '>
                        {product.description}
                    </p>
                    <button
                        onClick={() => handleAddToCart(product)} 
                        className='
                            bg-blue-600 
                            text-white 
                            px-3 py-1 
                            rounded mt-2 hover:bg-blue-700
                            w-3/5 h-12
                            ' >
                        Agregar al carrito
                    </button>
                </div>

            </div>


        </div>
    );
}

export default ProductDetail;