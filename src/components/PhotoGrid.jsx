import PhotoCard from './PhotoCard'

function PhotoGrid({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-14 px-2 md:px-8 py-8">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  )
}

export default PhotoGrid