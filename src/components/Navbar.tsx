import { useCallback, useContext, useEffect, useState } from 'react';

import iconUp from '../assets/up_arrow_icon.svg';
import iconDown from '../assets/down_arrow_icon.svg';
import { createPortal } from 'react-dom';
import CartModal from './CartModal';
import { CartContext } from '../contexts/cart';

function Navbar() {
    const { state } = useContext(CartContext);
    const [isMountedCompany, setIsMountedCompany] = useState(false);
    const [isMountedFeatures, setIsMountedFeatures] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleFeatures = () => {
        setIsMountedFeatures(!isMountedFeatures);
        setIsMountedCompany(false);
    };

    const toggleCompany = () => {
        setIsMountedCompany(!isMountedCompany);
        setIsMountedFeatures(false);
    };

    const closeOpenMenus = useCallback(
        (e: MouseEvent) => {
            const div = e.target as HTMLElement;

            if (div) {
                if (div.id !== 'closeMenus') return;
            }

            if (isMountedFeatures) setIsMountedFeatures(!isMountedFeatures);
            if (isMountedCompany) setIsMountedCompany(!isMountedCompany);
            if (isOpen) setIsOpen(!isOpen);
        },
        [isMountedFeatures, isMountedCompany, isOpen]
    );

    useEffect(() => {
        if (isMountedFeatures || isMountedCompany || isOpen) {
            document.addEventListener('click', closeOpenMenus);
        }

        return () => {
            document.removeEventListener('click', closeOpenMenus);
        };
    }, [closeOpenMenus, isMountedCompany, isMountedFeatures, isOpen]);

    const openCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex w-full py-4 px-12">
            {(isMountedFeatures || isMountedCompany || isOpen) && (
                <div
                    id="closeMenus"
                    className="absolute top-0 left-0 w-full h-full z-40"
                />
            )}
            <section className="flex items-center">
                <h2 className="text-2xl cursor-pointer">Shopping</h2>
            </section>
            <section className="flex flex-grow justify-center items-center gap-10">
                <div className="flex relative">
                    <div
                        className="flex items-center cursor-pointer text-gray-500 hover:text-gray-950"
                        onClick={toggleFeatures}
                        role="presentation"
                    >
                        <span className="mr-0.5">Features</span>
                        <img
                            className="w-4 h-4"
                            src={isMountedFeatures ? iconUp : iconDown}
                            alt="icon up or down"
                        />
                    </div>
                    {isMountedFeatures && (
                        <ul
                            className={`absolute z-50 text-gray-500 cursor-pointer top-10 right-0 flex flex-col rounded-md border-none shadow-md gap-2 py-3 px-8 bg-white`}
                        >
                            <li className="hover:text-gray-950">Todo List</li>
                            <li className="hover:text-gray-950">Calendar</li>
                            <li className="hover:text-gray-950">Reminders</li>
                            <li className="hover:text-gray-950">Planning</li>
                        </ul>
                    )}
                </div>
                <div className="relative">
                    <div
                        className="flex items-center cursor-pointer text-gray-500 hover:text-gray-950"
                        onClick={toggleCompany}
                        role="presentation"
                    >
                        <span className="mr-0.5 ">Company</span>
                        <img
                            className="w-4 h-4"
                            src={isMountedCompany ? iconUp : iconDown}
                            alt="icon up or down"
                        />
                    </div>
                    {isMountedCompany && (
                        <ul
                            className={`absolute z-50 text-gray-500 cursor-pointer w-28 top-10 left-0 flex flex-col rounded-md gap-2 p-4 border-none shadow-md bg-white`}
                        >
                            <li className="hover:text-gray-950">History</li>
                            <li className="hover:text-gray-950">Our Team</li>
                            <li className="hover:text-gray-950">Blog</li>
                        </ul>
                    )}
                </div>
                <span className="cursor-pointer text-gray-500 hover:text-gray-950">
                    Carers
                </span>
                <span className="cursor-pointer text-gray-500  hover:text-gray-950">
                    About
                </span>
            </section>
            <section className="flex justify-end items-center">
                <div className="flex gap-4">
                    <div
                        className="relative inline-flex items-center p-3 text-sm font-medium text-center cursor-pointer"
                        onClick={openCart}
                        role="presentation"
                    >
                        <div className="w-8">
                            <svg
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect fill="none" height="256" width="256" />
                                <path
                                    d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="80"
                                    cy="204"
                                    fill="none"
                                    r="20"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="184"
                                    cy="204"
                                    fill="none"
                                    r="20"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="8"
                                />
                                <path
                                    d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="8"
                                />
                            </svg>
                        </div>

                        <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full top-1.5 left-7">
                            {state.cart.reduce(
                                (acc, cartItem) => acc + cartItem.quantity,
                                0
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {isOpen && createPortal(<CartModal />, document.body)}
        </nav>
    );
}

export default Navbar;
