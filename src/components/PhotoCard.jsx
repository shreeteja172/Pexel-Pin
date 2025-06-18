function PhotoCard({ photo }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden flex flex-col border border-gray-100">
      <a href={photo.url} target="_blank" rel="noopener noreferrer">
        <img
          src={photo.src.large}
          alt={photo.alt || 'Pexels Photo'}
          className="w-full h-60 object-cover transition-all duration-300"
        />
      </a>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {photo.photographer}
          </span>
        </div>
        <a
          href={photo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline text-xs mt-auto font-medium"
        >
          View Original
        </a>
      </div>
    </div>
  )
}

export default PhotoCard