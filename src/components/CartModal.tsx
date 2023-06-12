import { useContext } from 'react';
import { CartItem } from '../types';
import ButtonQuantity from './ButtonQuantity';
import { CartContext } from '../contexts/cart';

interface CartProps {
	isOpen: boolean;
	closeCartModal: () => void;
}

function CartModal({ isOpen, closeCartModal }: CartProps) {
	const { state, removeToCart, clearCart } = useContext(CartContext);

	const deleteItemCart = (cartItem: CartItem) => {
		removeToCart(cartItem);
	};

	const handleClearCart = () => {
		clearCart();
	};

	const handleCheckout = () => {
		console.log('Checkout');
	};

	const handleCloseCartModal = () => {
		closeCartModal();
	};

	return (
		<div
			id='cart'
			className={`fixed right-0 top-0 z-50 flex h-screen w-full flex-col gap-5 overflow-y-scroll bg-white p-7 duration-300 ease-in-out md:w-[700px] ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}
		>
			<div className='flex justify-end'>
				<span
					className='h-6 w-6 cursor-pointer rounded-full bg-white text-center text-black drop-shadow-lg hover:text-orange-600'
					onClick={handleCloseCartModal}
					role='presentation'
				>
					X
				</span>
			</div>
			{state.cart.length === 0 ? (
				<div className='flex justify-center'>
					<h1 className='font-semibold md:text-2xl'>
						You don&apos;t have any items in your cart.
					</h1>
				</div>
			) : (
				<div className='flex flex-col gap-10'>
					{state.cart.map(cartItem => (
						<div
							className='flex w-full flex-col items-center gap-3 md:flex-row'
							key={cartItem.product.id}
						>
							<div>
								<div
									className='flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-lg hover:fill-orange-600'
									onClick={() => deleteItemCart(cartItem)}
									role='presentation'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 448 512'
										width='16px'
										height='16px'
									>
										<path d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
									</svg>
								</div>
								<img
									className='h-20 w-20 object-contain'
									src={cartItem.product.image}
									alt={cartItem.product.title}
								/>
							</div>
							<div className='w-60'>{cartItem.product.title}</div>
							<div className='flex gap-2'>
								<div className='flex w-24 justify-center'>
									US${cartItem.product.price}
								</div>
								<ButtonQuantity cartItem={cartItem} />
								<div className='flex w-24 justify-center'>
									US${cartItem.price.toFixed(2)}
								</div>
							</div>
						</div>
					))}

					<div className='flex justify-end border-t-2 pt-8 font-semibold'>
						<h1>Total: US$</h1>
						<h1>
							{state.cart
								.reduce((acc, cartItem) => acc + cartItem.price, 0)
								.toFixed(2)}
						</h1>
					</div>
					<div className='flex justify-center gap-5'>
						<button
							className='w-32 rounded-md border-2 border-slate-700 bg-transparent px-4 py-2 font-semibold text-black hover:font-semibold hover:text-orange-600'
							onClick={handleClearCart}
						>
							Clear cart
						</button>
						<button
							className='w-32 rounded-md border-2 border-slate-700 bg-slate-700 px-4 py-2 font-semibold text-white hover:font-semibold hover:text-orange-600'
							onClick={handleCheckout}
						>
							Checkout
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default CartModal;
