import { memo } from 'react'

function ImagePreview({ title, imageUrl }) {
  return (
    <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-white/30">
      <div className="bg-white/40 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 border-b border-white/30">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 drop-shadow-sm">{title}</h3>
      </div>
      <div className="p-2 sm:p-3 md:p-4 bg-white/20 backdrop-blur-sm">
        <div className="relative w-full min-h-[300px] sm:min-h-[400px] max-h-[70vh] bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/40 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain"
            loading="lazy"
            decoding="async"
            style={{
              imageRendering: 'auto',
              maxWidth: '100%'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(ImagePreview)

