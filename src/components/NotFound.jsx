const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4">
    <div className="text-center max-w-md">
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-tight mb-2">404</h1>
      <div className="w-16 h-1 bg-blue-500 mx-auto my-6 rounded-full"></div>
      <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <a 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Return Home
      </a>
    </div>
  </div>
);

export default NotFound;