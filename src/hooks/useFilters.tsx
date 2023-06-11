import { useContext } from 'react';
import { Product } from '../types';
import { FilterContext } from '../contexts/filter';

export function useFilters() {
    const { filters, changeMinPrice, changeCategory, changeOrder } =
        useContext(FilterContext);

    const filterProducts = (products: Product[]) => {
        if (filters.order === 'minus')
            return products
                .sort((a, b) => (a.price > b.price ? 1 : -1))
                .filter(product => {
                    return (
                        product.price >= filters.minPrice &&
                        (filters.category === 'all' ||
                            product.category === filters.category)
                    );
                });
        if (filters.order === 'plus')
            return products
                .sort((a, b) => (a.price > b.price ? -1 : 1))
                .filter(product => {
                    return (
                        product.price >= filters.minPrice &&
                        (filters.category === 'all' ||
                            product.category === filters.category)
                    );
                });
        return products.filter(product => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' ||
                    product.category === filters.category)
            );
        });
    };
    return {
        filters,
        filterProducts,
        changeMinPrice,
        changeCategory,
        changeOrder
    };
}
