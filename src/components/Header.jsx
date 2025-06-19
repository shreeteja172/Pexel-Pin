import { Link, useLocation } from 'react-router-dom'; 

function Header() {
    const location = useLocation();
    return (
        <header
            className="w-full bg-gradient-to-r from-gray-900 via-blue-950 to-black/90 backdrop-blur-md shadow-lg sticky top-0 z-30 transition-all border-b border-blue-900/40"
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Link to="/" >
                        <img 
                            src="https://cdn.dribbble.com/userupload/12502445/file/original-0d563a20d4cf5c74cdc3fc0fd21aedd2.jpg?resize=1024x768&vertical=center" 
                            alt="Pexels Logo" 
                            className="h-10 w-10 object-cover rounded-full border-2 border-blue-400 shadow-md" 
                        />
                    </Link>
                    <span className="text-3xl font-extrabold font-sans tracking-tight text-blue-200 drop-shadow">Pexel-Pin</span>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li>
                            <Link 
                                to="/" 
                                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                                    location.pathname === "/" 
                                    ? "bg-blue-800 text-white shadow" 
                                    : "text-gray-200 hover:bg-blue-900/60 hover:text-blue-200"
                                }`}
                            >Home</Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                                    location.pathname === "/contact" 
                                    ? "bg-blue-800 text-white shadow" 
                                    : "text-gray-200 hover:bg-blue-900/60 hover:text-blue-200"
                                }`}
                            >Contact</Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                                    location.pathname === "/about" 
                                    ? "bg-blue-800 text-white shadow" 
                                    : "text-gray-200 hover:bg-blue-900/60 hover:text-blue-200"
                                }`}
                            >About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <img 
                src="https://avatars.githubusercontent.com/u/176574652?v=4" 
                alt="Logo" 
                className="absolute top-3 right-6 h-12 w-12 rounded-full border-4 border-blue-900 shadow-xl object-cover" 
            />
        </header>
    )
}

export default Header
