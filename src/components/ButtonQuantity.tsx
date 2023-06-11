import React, { useContext } from 'react';
import { CartItem } from '../types';
import { CartContext } from '../contexts/cart';

interface ButtonQuantityProps {
    cartItem: CartItem;
}

function ButtonQuantity({ cartItem }: ButtonQuantityProps) {
    const { minusQuantity, plusQuantity, addQuantity } =
        useContext(CartContext);

    const handleQuantityMinus = () => {
        if (cartItem.quantity > 1) {
            minusQuantity(cartItem);
        }
    };

    const handleQuantityPlus = () => {
        plusQuantity(cartItem);
    };

    const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '') {
            addQuantity(cartItem, e.target.value);
        }
    };

    return (
        <div className="flex justify-center rounded-md h-7 border-2 border-slate-500 drop-shadow-lg">
            <button
                type="button"
                className="flex items-center justify-center w-6"
                onClick={handleQuantityMinus}
            >
                <span className=" w-full h-full text-black  hover:text-orange-600 hover:font-bold">
                    -
                </span>
            </button>
            <input
                value={cartItem.quantity}
                className="w-10 text-center font-semibold"
                onChange={handleQuantity}
            />
            <button
                type="button"
                className="flex items-center justify-center w-6"
                onClick={handleQuantityPlus}
            >
                <span className=" w-full h-full text-black hover:text-orange-600 hover:font-bold">
                    +
                </span>
            </button>
        </div>
    );
}

export default ButtonQuantity;
