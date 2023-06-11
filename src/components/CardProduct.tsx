import { useContext } from 'react';
import { Product } from '../types';
import { CartContext } from '../contexts/cart';

interface CartProps {
    product: Product;
}

function CardProduct({ product }: CartProps) {
    const { addToCart } = useContext(CartContext);

    const handleAddProduct = () => {
        addToCart({
            product,
            quantity: 1,
            price: product.price
        });
    };

    return (
        <div className="relative flex flex-col gap-2 w-80 bg-white px-4 py-4 drop-shadow-xl rounded-xl justify-between">
            <div
                className="absolute cursor-pointer w-10 p-2 right-4 top-4 rounded-full z-30 hover:text-white hover:bg-red-500 transition ease-in-out duration-500"
                onClick={handleAddProduct}
                role="presentation"
            >
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="256" width="256" />
                    <path
                        d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                    />
                    <circle
                        cx="80"
                        cy="204"
                        fill="none"
                        r="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                    />
                    <circle
                        cx="184"
                        cy="204"
                        fill="none"
                        r="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                    />
                    <path
                        d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="8"
                    />
                </svg>
            </div>
            <img
                className="w-full h-60 p-10 object-contain hover:scale-110 hover:transition-transform"
                src={product.image}
                alt={`${product.title}`}
            />
            <h1 className="py-2 font-bold text-md">{product.title}</h1>
            <div className="flex justify-between">
                <span className="py-2 font-bold">U$S {product.price}</span>
            </div>
        </div>
    );
}

export default CardProduct;
