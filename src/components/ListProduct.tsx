import CardProduct from './CardProduct';
import { useFilters } from '../hooks/useFilters';
import useGetProducts from '../hooks/useGetProducts';
import Skeleton from './Skeleton';

function ListProduct() {
	const { products, loading } = useGetProducts();
	const { filterProducts } = useFilters();
	const filteredProducts = filterProducts(products);
	return (
		<main className='flex w-full flex-wrap justify-center gap-8 p-8'>
			{loading && <Skeleton />}
			{filteredProducts.map(product => (
				<CardProduct key={product.id} product={product} />
			))}
		</main>
	);
}

export default ListProduct;
