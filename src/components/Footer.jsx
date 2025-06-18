function Footer() {
  return (
    <footer className="w-full bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Pexels Clone. All rights reserved.
        </span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-sm">
            Pexels
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 text-sm">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer