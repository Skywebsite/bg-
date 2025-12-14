import { memo } from 'react'

function TextToImageSection({
  textPrompt,
  setTextPrompt,
  isGenerating,
  generatedImage,
  imageError,
  setImageError,
  onGenerateImage,
  onDownloadGeneratedImage,
  onClearGeneratedImage
}) {
  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/30 shadow-lg">
        <div className="text-center mb-6">
          <div className="mb-4 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6M7 16h4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 14l2.5 2.5M16.5 14l-2.5 2.5" />
                <circle cx="15.5" cy="15.5" r="2.5" strokeWidth={1.5} fill="none" opacity="0.3" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 drop-shadow-sm">Text to Image</h2>
          <p className="text-gray-800 text-sm sm:text-base drop-shadow-sm">Describe an image and AI will generate it for you</p>
        </div>

        {imageError && (
          <div className="mb-4 p-3 bg-red-500/30 backdrop-blur-md border border-red-400/50 rounded-lg">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <p className="text-red-900 text-sm drop-shadow-sm">{imageError}</p>
              </div>
              <button
                onClick={() => setImageError(null)}
                className="text-red-700 hover:text-red-900 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Text Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2 drop-shadow-sm">
            Describe the image you want to generate
          </label>
          <textarea
            value={textPrompt}
            onChange={(e) => setTextPrompt(e.target.value)}
            placeholder="e.g., A cat in a wizard hat, A beautiful sunset over mountains, A futuristic cityscape..."
            className="w-full px-4 py-3 border border-white/40 bg-white/40 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 resize-none text-gray-900 placeholder:text-gray-600"
            rows="4"
            disabled={isGenerating}
          />
          <p className="mt-2 text-xs text-gray-700 drop-shadow-sm">
            Be as descriptive as possible for better results
          </p>
        </div>

        {/* Generate Button */}
        <div className="mb-6 flex gap-3">
          <button
            onClick={(e) => {
              e.preventDefault()
              onGenerateImage()
            }}
            disabled={isGenerating || !textPrompt.trim()}
            className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate Image'
            )}
          </button>
          {generatedImage && (
            <button
              onClick={() => onClearGeneratedImage(false)}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
            >
              Clear
            </button>
          )}
        </div>

        {/* Loading State */}
        {isGenerating && (
          <div className="text-center mb-6">
            <div className="flex justify-center items-center mb-3">
              <svg className="animate-spin h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <p className="text-gray-900 text-base font-medium drop-shadow-sm">
              Generating your image... This may take 10-30 seconds
            </p>
          </div>
        )}

        {/* Generated Image Display */}
        {generatedImage && (
          <div className="space-y-4">
            <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/30">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 drop-shadow-sm">Generated Image</h3>
              <div className="relative w-full min-h-[400px] max-h-[80vh] bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/40 flex items-center justify-center">
                <img
                  src={generatedImage}
                  alt="Generated from text"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  loading="lazy"
                  onError={() => {
                    setImageError('Failed to load the generated image. The URL may be invalid or expired.')
                    onClearGeneratedImage(false)
                  }}
                />
              </div>
            </div>
            <div className="flex gap-3 pb-2">
              <button
                onClick={onDownloadGeneratedImage}
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors touch-manipulation flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Image
              </button>
              <button
                onClick={() => onClearGeneratedImage(false)}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
              >
                Clear Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(TextToImageSection)


