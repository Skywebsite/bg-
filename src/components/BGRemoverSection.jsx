import { memo } from 'react'
import UploadBox from './UploadBox'
import ImagePreview from './ImagePreview'

const MemoizedImagePreview = memo(ImagePreview)

function BGRemoverSection({
  handleImageSelect,
  isProcessing,
  originalImage,
  processedImage,
  processingProgress,
  handleDownload,
  handleReset
}) {
  return (
    <>
      {!originalImage && (
        <UploadBox
          onImageSelect={handleImageSelect}
          isProcessing={isProcessing}
        />
      )}

      {isProcessing && (
        <div className="max-w-2xl mx-auto mb-4 sm:mb-6 text-center px-2">
          <div className="flex justify-center items-center mb-3 sm:mb-4">
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64">
              <svg className="animate-spin h-full w-full text-indigo-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
          <p className="mt-2 sm:mt-4 text-gray-600 text-base sm:text-lg font-medium">
            Processing image... {processingProgress > 0 && `${processingProgress}%`}
          </p>
        </div>
      )}

      {(originalImage || processedImage) && (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {originalImage && (
              <MemoizedImagePreview
                title="Original"
                imageUrl={originalImage}
              />
            )}
            {processedImage && (
              <MemoizedImagePreview
                title="Background Removed"
                imageUrl={processedImage}
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
            {processedImage && (
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg touch-manipulation"
              >
                Download PNG
              </button>
            )}
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
            >
              Remove Another Image
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(BGRemoverSection)


