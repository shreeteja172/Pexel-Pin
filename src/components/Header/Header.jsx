function Header() {
  return (
    <header className="w-full bg-white shadow mb-8">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/pexels-logo.svg" alt="Pexels Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-gray-800">Pexel-Pin</span>
        </div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Explore</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header