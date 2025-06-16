function PhotoCard({ photo }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <a href={photo.url} target="_blank" rel="noopener noreferrer">
        <img
          src={photo.src.medium}
          alt={photo.alt || 'Pexels Photo'}
          className="w-full h-56 object-cover"
        />
      </a>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Photographer:</span> {photo.photographer}
          </p>
        </div>
        <a
          href={photo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xs mt-auto"
        >
          View Original
        </a>
      </div>
    </div>
  )
}

export default PhotoCard