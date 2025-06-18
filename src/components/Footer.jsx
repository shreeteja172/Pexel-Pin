function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-100 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="font-bold text-blue-700">Pexels Clone</span>. All rights reserved.
        </span>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-sm transition">
            Pexels
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 text-sm transition">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 text-sm transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer