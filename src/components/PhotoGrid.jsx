import PhotoCard from './PhotoCard'

function PhotoGrid({ photos }) {
  return (
    <div
      className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-4 gap-6 w-full max-w-[1800px] mx-auto"
      style={{ minHeight: '60vh' }}
    >
      {photos.map((photo) => (
        <div key={photo.id} className="mb-6 break-inside-avoid">
          <PhotoCard photo={photo} />
        </div>
      ))}
    </div>
  )
}

export default PhotoGrid