import { Action, ActionsCart, CartState } from '../types';

export function cartReducer(state: CartState, action: Action): CartState {
	const { type, payload } = action;
	switch (type) {
		case ActionsCart.ADD_PRODUCT: {
			const isInCart = state.cart.some(
				item => item.product.id === payload.product.id
			);

			if (isInCart) {
				return {
					...state,
					cart: state.cart.map(item =>
						item.product.id === payload.product.id
							? {
									...item,
									quantity: item.quantity + 1,
									price: item.price + payload.product.price
							  }
							: item
					)
				};
			}

			return {
				...state,
				cart: [
					...state.cart,
					{
						...payload
					}
				]
			};
		}
		case ActionsCart.REMOVE_PRODUCT: {
			return {
				...state,
				cart: state.cart.filter(c => c.product.id !== payload.product.id)
			};
		}
		case ActionsCart.CLEAR_CART: {
			return {
				...state,
				cart: payload
			};
		}
		case ActionsCart.MINUS_QUANTITY: {
			return {
				...state,
				cart: state.cart.map(item =>
					item.product.id === payload.product.id ? payload : item
				)
			};
		}
		case ActionsCart.PLUS_QUANTITY: {
			return {
				...state,
				cart: state.cart.map(item =>
					item.product.id === payload.product.id ? payload : item
				)
			};
		}
		case ActionsCart.ADD_QUANTITY: {
			return {
				...state,
				cart: state.cart.map(item =>
					item.product.id === payload.product.id
						? {
								...item,
								quantity: payload.quantity,
								price: payload.price
						  }
						: item
				)
			};
		}
		default:
			return state;
	}
}
