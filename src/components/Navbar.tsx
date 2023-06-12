import { useCallback, useContext, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';
import CartModal from './CartModal';
import { CartContext } from '../contexts/cart';

function Navbar() {
	const { state } = useContext(CartContext);
	const [isOpen, setIsOpen] = useState(false);

	const closeOpenMenus = useCallback(
		(e: MouseEvent) => {
			const div = e.target as HTMLElement;

			if (div) {
				if (div.id !== 'closeMenus') return;
			}

			if (isOpen) setIsOpen(!isOpen);
		},
		[isOpen]
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', closeOpenMenus);
		}

		return () => {
			document.removeEventListener('click', closeOpenMenus);
		};
	}, [closeOpenMenus, isOpen]);

	const openCart = () => {
		setIsOpen(true);
	};

	const closeCartModal = () => {
		setIsOpen(false);
	};

	return (
		<nav className='flex w-full justify-between px-12 py-4 text-gray-950'>
			{isOpen && (
				<div
					id='closeMenus'
					className='absolute left-0 top-0 z-40 h-full w-full'
				/>
			)}
			<section className='flex items-center'>
				<h2 className='cursor-pointer text-2xl'>Shopping</h2>
			</section>
			<section className='flex items-center justify-end'>
				<div className='flex gap-4'>
					<div
						className='relative inline-flex cursor-pointer items-center p-3 text-center text-sm font-medium'
						onClick={openCart}
						role='presentation'
					>
						<div className='w-6'>
							<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
								<rect fill='none' height='256' width='256' />
								<path
									d='M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='8'
								/>
								<circle
									cx='80'
									cy='204'
									fill='none'
									r='20'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='8'
								/>
								<circle
									cx='184'
									cy='204'
									fill='none'
									r='20'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='8'
								/>
								<path
									d='M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48'
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='8'
								/>
							</svg>
						</div>
						<div className='absolute left-7 top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white'>
							{state.cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)}
						</div>
					</div>
				</div>
			</section>
			{createPortal(
				<CartModal isOpen={isOpen} closeCartModal={closeCartModal} />,
				document.body
			)}
		</nav>
	);
}

export default Navbar;
