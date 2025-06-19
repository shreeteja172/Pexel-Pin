import React from 'react';

function PhotoCard({ photo }) {
  return (
    <div
      className="relative w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-transform overflow-hidden group"
      style={{ minHeight: '0' }}
    >
      <div className="relative w-full">
        <img
          src={photo.src.large}
          alt={photo.alt || 'Pexels Photo'}
          className="w-full h-auto object-cover block transition duration-300 group-hover:brightness-75"
        />
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-base font-semibold truncate max-w-[60%]">
            {photo.photographer}
          </span>
          <a
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-5 py-2 rounded bg-green-500 text-white text-base font-bold shadow hover:bg-green-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            View Original
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard