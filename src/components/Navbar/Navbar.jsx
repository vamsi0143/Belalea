import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
// import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/images/logo.jpeg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        // {
        //     name: "Home",
        //     path: "/",
        // },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Shop",
            path: "/shop",
        },
        {
            name: "Shop Single",
            path: "/shop-single",
        },
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Blog Single",
            path: "/blog-single/1",
        },

        {
            name: "Contact",
            path: "/contact",
        },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 duration-300 ${sticky
                ? "bg-white shadow-lg py-5"
                : "bg-white py-7"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo */}

                <NavLink to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-40 object-contain"
                    />
                </NavLink>

                {/* Desktop Menu */}

                <nav className="hidden lg:flex items-center gap-10">

                    {navLinks.map((item) => (

                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative font-semibold transition-all duration-300 ${isActive
                                    ? "text-[#7EB693]"
                                    : "text-[#274C5B] hover:text-[#7EB693]"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>

                    ))}

                </nav>

                {/* Right Side */}

                <div className="hidden lg:flex items-center gap-6">

                    {/* Search */}

                    <div className="relative">

                        <input
                            type="text"
                            placeholder=""
                            className="w-64 h-12 rounded-full bg-[#FAFAFA] border border-gray-200 outline-none pl-6 pr-14 focus:border-[#7EB693]"
                        />

                        <button
                            className="absolute right-1 top-1 w-10 h-10 rounded-full bg-[#7EB693] hover:bg-[#274C5B] duration-300 flex justify-center items-center"
                        >
                            <FiSearch className="text-white" />
                        </button>

                    </div>

                    {/* Contact */}

                    <NavLink to="/contact">

                        <button
                            className="flex items-center gap-3 border border-[#E0E0E0] rounded-full px-3 py-2 hover:bg-[#274C5B] hover:text-white duration-300"
                        >

                            <span
                                className="w-10 h-10 rounded-full bg-[#274C5B] flex justify-center items-center"
                            >
                            </span>

                            <span className="font-semibold">
                                Контакты
                            </span>

                        </button>

                    </NavLink>

                </div>

                {/* Mobile Button */}

                <button
                    className="lg:hidden text-3xl text-[#274C5B]"
                    onClick={() => setMenuOpen(true)}
                >
                    <FiMenu />
                </button>

            </div>

            {/* Mobile Drawer */}

            <AnimatePresence>

                {menuOpen && (

                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: .35 }}
                        className="fixed top-0 right-0 w-72 h-screen bg-white shadow-2xl z-50"
                    >

                        {/* Drawer Header */}

                        <div className="flex justify-between items-center p-6 border-b">

                            <img
                                src={logo}
                                alt=""
                                className="w-32"
                            />

                            <button
                                onClick={() => setMenuOpen(false)}
                            >
                                <FiX className="text-3xl" />
                            </button>

                        </div>

                        {/* Links */}

                        <div className="flex flex-col gap-6 p-8">

                            {navLinks.map((item) => (

                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `font-semibold text-lg ${isActive
                                            ? "text-[#7EB693]"
                                            : "text-[#274C5B]"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>

                            ))}

                            {/* Search */}

                            <div className="relative mt-3">

                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-12 rounded-full bg-gray-100 pl-5 pr-12 outline-none"
                                />

                                <button
                                    className="absolute right-1 top-1 w-10 h-10 rounded-full bg-[#7EB693] flex justify-center items-center"
                                >
                                    <FiSearch className="text-white" />
                                </button>

                            </div>

                            {/* Contact */}

                            <NavLink
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                            >

                                <button
                                    className="mt-4 w-full bg-[#274C5B] hover:bg-[#7EB693] duration-300 text-white py-3 rounded-full"
                                >
                                    Контакты
                                </button>

                            </NavLink>

                        </div>

                    </motion.div>

                )}

            </AnimatePresence>

        </header>
    );
}