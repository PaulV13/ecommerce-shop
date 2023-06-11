import { createContext, useState } from 'react';
import { FilterState } from '../types';

type Props = {
    children: React.ReactNode;
};

type InitialStateType = FilterState;

const initialState: FilterState = {
    category: 'all',
    minPrice: 0,
    order: 'minus'
};

export const FilterContext = createContext<{
    filters: InitialStateType;
    changeMinPrice: (minPrice: number) => void;
    changeCategory: (category: string) => void;
    changeOrder: (order: string) => void;
}>({
    filters: initialState,
    changeMinPrice: () => null,
    changeCategory: () => null,
    changeOrder: () => null
});

export const FilterContextProvider = ({ children }: Props) => {
    const [filters, setFilters] = useState(initialState);

    const changeMinPrice = (minPrice: number) =>
        setFilters(prevState => ({
            ...prevState,
            minPrice: minPrice
        }));

    const changeCategory = (category: string) =>
        setFilters(prevState => ({
            ...prevState,
            category: category
        }));

    const changeOrder = (order: string) =>
        setFilters(prevState => ({
            ...prevState,
            order: order
        }));

    return (
        <FilterContext.Provider
            value={{
                filters,
                changeMinPrice,
                changeCategory,
                changeOrder
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
