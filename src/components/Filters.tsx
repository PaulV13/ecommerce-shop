import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

function Filters() {
    const { filters, changeMinPrice, changeCategory, changeOrder } =
        useFilters();
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    const orderFilterId = useId();

    const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeMinPrice(Number(e.target.value));
    };

    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeCategory(e.target.value);
    };

    const handleChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeOrder(e.target.value);
    };

    return (
        <section className="flex w-full justify-center gap-10">
            <div className="flex gap-1">
                <label htmlFor={minPriceFilterId}>Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span className="w-12">US${filters.minPrice}</span>
            </div>
            <div className="flex gap-4">
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value={`men's clothing`}>Men clothing</option>
                    <option value={`women's clothing`}>Women clothing</option>
                </select>
            </div>
            <div className="flex gap-4">
                <label htmlFor={orderFilterId}>Order</label>
                <select id={orderFilterId} onChange={handleChangeOrder}>
                    <option value="minus">Minus Price</option>
                    <option value="plus">Plus Price</option>
                </select>
            </div>
        </section>
    );
}

export default Filters;
