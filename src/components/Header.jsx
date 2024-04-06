import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShopify } from "react-icons/fa";


const Header = () => {

    const { cart } = useSelector((state) => state);

    return (
        <nav className="flex bg-indigo-600  w-full fixed top-0 z-50">
            <div className="px-5 xl:px-12 py-2 mx-16 flex w-full items-center justify-between">
                <NavLink to="/">
                    <span className="text-xl text-white font-semibold font-heading flex items-center">
                        <img src={process.env.PUBLIC_URL + '/MarketMingle-logo.png'} alt='logo'/>
                    </span>
                </NavLink>
                <ul className="hidden md:flex text-white font-semibold text-sm font-heading space-x-6 items-center">
                    <li>
                        <NavLink to="/">
                            <span className="hover:text-gray-300">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            <div className="relative z-20">
                                <div className="flex max-w-[200px] justify-end">
                                    <button
                                        className="relative flex h-[42px] w-[42px] items-center justify-center  bg-gray-2 text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white hover:text-gray-300"
                                    >
                                        <MdOutlineShoppingCart size={22} />
                                        <span className="absolute -right-0 -top-1 h-[18px] w-[18px] rounded-full bg-primary text-[12px] font-semibold leading-[26px] text-dark">
                                            {
                                                cart.length
                                            }
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
