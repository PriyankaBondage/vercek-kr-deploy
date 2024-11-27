"use client";
import React, { useState } from 'react';
import styles from "../Styles/navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* Navbar container */}
            <nav className="bg-black w-full h-16 border-b-2 border-blue-100">
                <div className="container px-5 text-white flex justify-between items-center">
                    {/* Logo */}
                    <div className={styles.brand}>
                        <Link href="/">
                            <img
                                className={styles.logo}
                                src="https://kingsresearch.b-cdn.net/assets/img/logo/KingsResearch_logo_black.webp"
                                alt="BrandLogo"
                                width="100%"
                                height="auto"
                            />
                        </Link>
                    </div>


                    <div className="hidden md:flex space-x-5 text-sm">
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none text-base"><Link href="/">Services</Link></li>
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none text-base"><Link href="/contact">Report Store</Link></li>
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none text-base"><Link href="/signUp">Market-Insights</Link></li>
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none text-base"><Link href="/signUp">Connect</Link></li>
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none text-base"><Link href="/about">About Us</Link></li>
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none text-base"><Link href="/contact">Login</Link></li>
                        <li className="flex justify-center items-center p-3 space-x-1 hover:bg-red-500 transition-colors duration-100">
                            <FontAwesomeIcon icon={faPhone} className="text-white" />
                            <a href="/">888-328-2189</a>
                        </li>
                        <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none">
                            <Link href="/signUp">business@kingsresearch.com</Link>
                        </li>
                    </div>


                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-white">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
            </nav>


            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white`}>
                <ul className="space-y-4 p-5">
                    <li className="hover:bg-red-500 text-lg p-3 transition-colors duration-100 list-none"><Link href="/">Services</Link></li>
                    <li className="hover:bg-red-500 text-lg p-3 transition-colors duration-100 list-none"><Link href="/contact">Report Store</Link></li>
                    <li className="hover:bg-red-500 text-lg p-3 transition-colors duration-100 list-none"><Link href="/signUp">Market-Insights</Link></li>
                    <li className="hover:bg-red-500 text-lg p-3 transition-colors duration-100 list-none"><Link href="/signUp">Connect</Link></li>
                    <li className="hover:bg-red-500 text-lg p-3 transition-colors duration-100 list-none"><Link href="/about">About Us</Link></li>
                    <li className="hover:bg-red-500 text-lg p-3 transition-colors duration-100 list-none"><Link href="/contact">Login</Link></li>
                    <li className="flex justify-center items-center p-3 space-x-1 hover:bg-red-500 transition-colors duration-100">
                        <FontAwesomeIcon icon={faPhone} className="text-white" />
                        <a href="/">888-328-2189</a>
                    </li>
                    <li className="hover:bg-red-500 p-3 transition-colors duration-100 list-none">
                        <Link href="/signUp">business@kingsresearch.com</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
