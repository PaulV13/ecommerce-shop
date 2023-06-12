import React, { useContext } from 'react';
import { CartItem } from '../types';
import { CartContext } from '../contexts/cart';

interface ButtonQuantityProps {
	cartItem: CartItem;
}

function ButtonQuantity({ cartItem }: ButtonQuantityProps) {
	const { minusQuantity, plusQuantity, addQuantity } = useContext(CartContext);

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
		<div className='flex h-7 justify-center rounded-md border-2 border-slate-500 drop-shadow-lg'>
			<button
				type='button'
				className='flex w-6 items-center justify-center'
				onClick={handleQuantityMinus}
			>
				<span className=' h-full w-full text-black hover:font-bold hover:text-orange-600'>
					-
				</span>
			</button>
			<input
				value={cartItem.quantity}
				className='w-10 text-center font-semibold'
				onChange={handleQuantity}
			/>
			<button
				type='button'
				className='flex w-6 items-center justify-center'
				onClick={handleQuantityPlus}
			>
				<span className='h-full w-full text-black hover:font-bold hover:text-orange-600'>
					+
				</span>
			</button>
		</div>
	);
}

export default ButtonQuantity;
