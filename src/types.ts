export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	image: string;
	price: number;
	rating: Rating;
}

export interface Rating {
	rate: number;
	count: number;
}

export interface FilterState {
	category: string;
	minPrice: number;
	order: string;
}

export interface CartItem {
	product: Product;
	quantity: number;
	price: number;
}

export interface CartState {
	cart: CartItem[];
}

export enum ActionsCart {
	ADD_PRODUCT = 'ADD_PRODUCT',
	REMOVE_PRODUCT = 'REMOVE_PRODUCT',
	CLEAR_CART = 'CLEAR_CART',
	MINUS_QUANTITY = 'MINUS_QUANTITY',
	PLUS_QUANTITY = 'PLUS_QUANTITY',
	ADD_QUANTITY = 'ADD_QUANTITY'
}

export interface ActionAddQuantity {
	type: ActionsCart.ADD_QUANTITY;
	payload: CartItem;
}

export interface ActionMinusQuantity {
	type: ActionsCart.MINUS_QUANTITY;
	payload: CartItem;
}

export interface ActionPlusQuantity {
	type: ActionsCart.PLUS_QUANTITY;
	payload: CartItem;
}

export interface ActionAdd {
	type: ActionsCart.ADD_PRODUCT;
	payload: CartItem;
}

export interface ActionRemove {
	type: ActionsCart.REMOVE_PRODUCT;
	payload: CartItem;
}

export interface ActionClear {
	type: ActionsCart.CLEAR_CART;
	payload: [];
}

export type Action =
	| ActionAdd
	| ActionClear
	| ActionRemove
	| ActionMinusQuantity
	| ActionPlusQuantity
	| ActionAddQuantity;
