import { useEffect, useState } from 'react';
import { Product } from '../types';
import axios from 'axios';

function useGetProducts() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await axios.get('https://fakestoreapi.com/products');
			const data = response.data;
			setProducts(data);
			setLoading(false);
		};

		getProducts();
	}, []);

	return { products, loading };
}

export default useGetProducts;
