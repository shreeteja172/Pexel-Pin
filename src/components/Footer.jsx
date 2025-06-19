import { FaUserAstronaut } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="w-full bg-gradient-to-r from-gray-900 via-blue-950 to-black/90 shadow-inner border-t border-blue-900/40"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-300 text-sm">
          © {new Date().getFullYear()} <span className="font-bold text-blue-200">Pexels Clone</span>. All rights reserved.
        </span>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 text-sm transition">
            Pexels
          </a>
          <a href="https://www.pexels.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 text-sm transition">
            Privacy
          </a>
          <Link to="/contact" className="text-gray-400 hover:text-blue-300 text-sm transition">
            Contact
          </Link>
          <a
            href="https://github.com/shreeteja172"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub"
            className="flex items-center gap-2 text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-200 to-indigo-200 transition-all duration-300 hover:scale-105"
          >
            <FaUserAstronaut className="w-5 h-5 text-blue-200" />
            Developed By Shreeteja Mutukundu
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer