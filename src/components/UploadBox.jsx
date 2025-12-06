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
    <div className="max-w-2xl mx-auto">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-xl p-12 text-center
          transition-all duration-200 cursor-pointer
          ${isDragging 
            ? 'border-indigo-500 bg-indigo-50 scale-105' 
            : 'border-gray-300 bg-white hover:border-indigo-400 hover:bg-indigo-50'
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

        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 text-indigo-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
            <p className="text-xl font-semibold text-gray-700 mb-2">
              {isDragging ? 'Drop your image here' : 'Drag & drop your image here'}
            </p>
            <p className="text-gray-500 mb-4">or</p>
            <button
              type="button"
              disabled={isProcessing}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Browse Files
            </button>
          </div>

          <p className="text-sm text-gray-400">
            Supports JPG, PNG, WebP and other image formats
          </p>
        </div>
      </div>
    </div>
  )
}

export default UploadBox

