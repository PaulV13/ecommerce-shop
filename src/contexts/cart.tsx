import { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cart';
import { ActionsCart, CartItem, CartState } from '../types';

type Props = {
	children: React.ReactNode;
};

type InitialStateType = {
	cart: CartItem[];
};

const initialState: CartState = {
	cart: []
};

export const CartContext = createContext<{
	state: InitialStateType;
	addToCart: (cartItem: CartItem) => void;
	removeToCart: (CartItem: CartItem) => void;
	clearCart: () => void;
	minusQuantity: (cartItem: CartItem) => void;
	plusQuantity: (cartItem: CartItem) => void;
	addQuantity: (cartItem: CartItem, quantity: string) => void;
}>({
	state: initialState,

	addToCart: () => null,
	removeToCart: () => null,
	clearCart: () => null,
	minusQuantity: () => null,
	plusQuantity: () => null,
	addQuantity: () => null
});

export const CartContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (cartItem: CartItem) =>
		dispatch({
			type: ActionsCart.ADD_PRODUCT,
			payload: cartItem
		});

	const removeToCart = (cartItem: CartItem) =>
		dispatch({
			type: ActionsCart.REMOVE_PRODUCT,
			payload: cartItem
		});

	const clearCart = () =>
		dispatch({
			type: ActionsCart.CLEAR_CART,
			payload: []
		});

	const minusQuantity = (cartItem: CartItem) =>
		dispatch({
			type: ActionsCart.MINUS_QUANTITY,
			payload: {
				...cartItem,
				quantity: cartItem.quantity - 1,
				price: parseFloat((cartItem.price - cartItem.product.price).toFixed(2))
			}
		});

	const plusQuantity = (cartItem: CartItem) =>
		dispatch({
			type: ActionsCart.PLUS_QUANTITY,
			payload: {
				...cartItem,
				quantity: cartItem.quantity + 1,
				price: parseFloat((cartItem.price + cartItem.product.price).toFixed(2))
			}
		});

	const addQuantity = (cartItem: CartItem, quantity: string) =>
		dispatch({
			type: ActionsCart.ADD_QUANTITY,
			payload: {
				...cartItem,
				quantity: parseFloat(quantity),
				price: cartItem.product.price * parseFloat(quantity)
			}
		});

	return (
		<CartContext.Provider
			value={{
				state,
				addToCart,
				removeToCart,
				clearCart,
				minusQuantity,
				plusQuantity,
				addQuantity
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
