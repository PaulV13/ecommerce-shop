import { useContext } from 'react';
import { CartItem } from '../types';
import ButtonQuantity from './ButtonQuantity';
import { CartContext } from '../contexts/cart';

function CartModal() {
    const { state, removeToCart, clearCart } = useContext(CartContext);

    const deleteItemCart = (cartItem: CartItem) => {
        removeToCart(cartItem);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const handleCheckout = () => {
        console.log('Checkout');
    };

    return (
        <div
            id="cart"
            className="absolute flex justify-center right-0 top-0 h-screen w-[700px] p-7 bg-white z-50"
        >
            {state.cart.length === 0 ? (
                <h1 className="font-semibold text-2xl">
                    You don&apos;t have any items in your cart.
                </h1>
            ) : (
                <div className="flex flex-col gap-10">
                    {state.cart.map(cartItem => (
                        <div
                            className="flex items-center gap-3"
                            key={cartItem.product.id}
                        >
                            <div
                                className="flex items-center justify-center w-6 h-6 text-center cursor-pointer rounded-full drop-shadow-lg bg-white text-black"
                                onClick={() => deleteItemCart(cartItem)}
                                role="presentation"
                            >
                                <span className="w-full h-full hover:text-orange-600">
                                    X
                                </span>
                            </div>
                            <img
                                className="w-20 h-20 object-contain"
                                src={cartItem.product.image}
                                alt={cartItem.product.title}
                            />
                            <div className="w-60">{cartItem.product.title}</div>
                            <div className="">US${cartItem.product.price}</div>
                            <ButtonQuantity cartItem={cartItem} />
                            <div className="w-24">
                                US${cartItem.price.toFixed(2)}
                            </div>
                        </div>
                    ))}

                    <div className="flex font-semibold justify-end border-t-2 pt-8">
                        <h1>Total: US$</h1>
                        <h1>
                            {state.cart
                                .reduce(
                                    (acc, cartItem) => acc + cartItem.price,
                                    0
                                )
                                .toFixed(2)}
                        </h1>
                    </div>
                    <div className="flex justify-center gap-5">
                        <button
                            className="w-32 rounded-md px-4 py-2 text-black font-semibold bg-transparent border-2 border-slate-700 hover:text-orange-600 hover:font-semibold"
                            onClick={handleClearCart}
                        >
                            Clear cart
                        </button>
                        <button
                            className="w-32 rounded-md px-4 py-2 text-white font-semibold bg-slate-700 border-2 border-slate-700 hover:text-orange-600 hover:font-semibold"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartModal;
