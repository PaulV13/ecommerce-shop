import CardProduct from './CardProduct';
import { useFilters } from '../hooks/useFilters';
import useGetProducts from '../hooks/useGetProducts';
import Skeleton from './Skeleton';

function ListProduct() {
    const { products, loading } = useGetProducts();
    const { filterProducts } = useFilters();
    const filteredProducts = filterProducts(products);
    return (
        <main className="flex flex-wrap w-full justify-center p-8 gap-8">
            {loading && <Skeleton />}
            {filteredProducts.map(product => (
                <CardProduct key={product.id} product={product} />
            ))}
        </main>
    );
}

export default ListProduct;
