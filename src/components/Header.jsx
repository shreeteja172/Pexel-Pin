import { Link, useLocation } from 'react-router-dom'; 
import { useState } from 'react';

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header
            className="w-full bg-gradient-to-r from-gray-900 via-blue-950 to-black/90 backdrop-blur-md shadow-lg sticky top-0 z-30 transition-all border-b border-blue-900/40"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Link to="/" >
                        <img 
                            src="https://cdn.dribbble.com/userupload/12502445/file/original-0d563a20d4cf5c74cdc3fc0fd21aedd2.jpg?resize=1024x768&vertical=center" 
                            alt="Pexels Logo" 
                            className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full border-2 border-blue-400 shadow-md" 
                        />
                    </Link>
                    <span className="text-xl sm:text-3xl font-extrabold font-sans tracking-tight text-blue-200 drop-shadow">Pexel-Pin</span>
                </div>
                {/* Hamburger for mobile */}
                <button className="sm:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span className={`block w-6 h-0.5 bg-blue-200 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-blue-200 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-blue-200 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
                <nav>
                    <ul className={`sm:flex space-x-0 sm:space-x-8 flex-col sm:flex-row absolute sm:static top-16 right-4 bg-gray-900/95 sm:bg-transparent rounded-lg shadow-lg sm:shadow-none p-4 sm:p-0 transition-all duration-300 z-40 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
                        <li className="mb-2 sm:mb-0">
                            <Link 
                                to="/" 
                                className={`px-3 py-1 rounded-lg font-medium transition-all block ${
                                    location.pathname === "/" 
                                    ? "bg-blue-800 text-white shadow" 
                                    : "text-gray-200 hover:bg-blue-900/60 hover:text-blue-200"
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >Home</Link>
                        </li>
                        <li className="mb-2 sm:mb-0">
                            <Link 
                                to="/contact" 
                                className={`px-3 py-1 rounded-lg font-medium transition-all block ${
                                    location.pathname === "/contact" 
                                    ? "bg-blue-800 text-white shadow" 
                                    : "text-gray-200 hover:bg-blue-900/60 hover:text-blue-200"
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >Contact</Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`px-3 py-1 rounded-lg font-medium transition-all block ${
                                    location.pathname === "/about" 
                                    ? "bg-blue-800 text-white shadow" 
                                    : "text-gray-200 hover:bg-blue-900/60 hover:text-blue-200"
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
