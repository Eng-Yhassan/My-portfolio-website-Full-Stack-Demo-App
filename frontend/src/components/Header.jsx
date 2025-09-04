import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
            <div className="flex justify-between items-center px-6 md:px-14 py-4">
                {/* Logo / Name */}
                <Link to="/">
                    <h1 className="text-4xl font-bold text-gray-800">Yahye Hassan</h1>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">

                    <Link to="/">
                        <li className="text-2xl">Home</li>
                    </Link>
                    <Link to="/projects">
                        <li className="text-2xl">Projects</li>
                    </Link>
                    <Link to="blog">
                        <li className="text-2xl">Blog</li>
                    </Link>
                    <Link to="/contact">
                        <li className="text-2xl">Contact</li>
                    </Link>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 text-2xl"
                >
                    {isOpen ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
                        <Link to="/">
                            <li className="text-2xl">Home</li>
                        </Link>
                        <Link to="/projects">
                            <li className="text-2xl">Projects</li>
                        </Link>
                        <Link to="blog">
                            <li className="text-2xl">Blog</li>
                        </Link>
                        <Link to="/contact">
                            <li className="text-2xl">Contact</li>
                        </Link>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
