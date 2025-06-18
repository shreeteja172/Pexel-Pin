import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <header className="w-full bg-white shadow mb-8">
            <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Link to="/" >
                    <img 
                        src="https://cdn.dribbble.com/userupload/12502445/file/original-0d563a20d4cf5c74cdc3fc0fd21aedd2.jpg?resize=1024x768&vertical=center" 
                        alt="Pexels Logo" 
                        className="h-8 w-8 object-cover rounded-full" 
                    /></Link>
                    <span className="text-2xl font-extrabold font-sans tracking-tight">Pexel-Pin</span>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-gray-600 hover:text-indigo-600 transition font-medium">Home</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition font-medium">Contact</Link></li>
                        <li><Link to="/about" className="text-gray-600 hover:text-indigo-600 transition font-medium">About</Link></li>
                    </ul>
                </nav>
            </div>
         <img src="https://avatars.githubusercontent.com/u/176574652?v=4" alt="Logo" className="absolute top-3 right-6 h-10 w-10 rounded-full border-2 border-white shadow-lg object-cover" />
        </header>
    )
}

export default Header
