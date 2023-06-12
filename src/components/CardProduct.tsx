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
		<div className='group relative flex w-80 cursor-pointer flex-col justify-between gap-2 rounded-xl bg-white px-4 py-4 drop-shadow-xl'>
			<div
				className='absolute right-5 top-5 z-50 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-lg hover:fill-orange-600'
				onClick={handleAddProduct}
				role='presentation'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='14px'
					viewBox='0 0 576 512'
				>
					<path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
				</svg>
			</div>
			<img
				className='h-60 w-full object-contain p-10 group-hover:scale-110 group-hover:transition-transform'
				src={product.image}
				alt={`${product.title}`}
			/>
			<h1 className='text-md py-2 font-bold'>{product.title}</h1>
			<div className='flex justify-between'>
				<span className='py-2 font-bold'>U$S {product.price}</span>
			</div>
		</div>
	);
}

export default CardProduct;
