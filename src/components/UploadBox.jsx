import { useCallback, useState } from 'react'

function UploadBox({ onImageSelect, isProcessing }) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (isProcessing) return

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        onImageSelect(file)
      }
    }
  }, [onImageSelect, isProcessing])

  const handleFileInput = useCallback((e) => {
    if (isProcessing) return

    const files = e.target.files
    if (files && files.length > 0) {
      onImageSelect(files[0])
    }
  }, [onImageSelect, isProcessing])

  return (
    <div className="max-w-2xl mx-auto px-2">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-xl p-6 sm:p-8 md:p-12 text-center
          transition-all duration-200 cursor-pointer touch-manipulation backdrop-blur-md
          ${isDragging 
            ? 'border-indigo-400 bg-indigo-500/30 scale-[1.02] sm:scale-105' 
            : 'border-white/40 bg-white/30 hover:border-indigo-400/60 hover:bg-white/40 active:scale-[0.98]'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        onClick={() => !isProcessing && document.getElementById('file-input')?.click()}
      >
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          disabled={isProcessing}
        />

        <div className="space-y-3 sm:space-y-4">
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 text-indigo-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          <div>
            <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 px-2 drop-shadow-sm">
              {isDragging ? 'Drop your image here' : 'Drag & drop your image here'}
            </p>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base drop-shadow-sm">or</p>
            <button
              type="button"
              disabled={isProcessing}
              className="px-6 py-2.5 sm:py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation text-sm sm:text-base"
            >
              Browse Files
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 px-2 drop-shadow-sm">
            Supports JPG, PNG, WebP and other image formats
          </p>
        </div>
      </div>
    </div>
  )
}

export default UploadBox

