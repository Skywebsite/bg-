import { memo } from 'react'
import UploadBox from './UploadBox'
import ImagePreview from './ImagePreview'

const MemoizedImagePreview = memo(ImagePreview)

function ImageCompressorSection({
  compressionFormat,
  setCompressionFormat,
  handleCompressSelect,
  isCompressing,
  compressionError,
  compressionProgress,
  compressionInput,
  compressedImage,
  compressionStats,
  handleDownloadCompressed,
  resetCompression,
  formatBytes,
  extensionFromMime
}) {
  return (
    <div className="max-w-4xl mx-auto px-2 space-y-5">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 sm:p-7 border border-white/40 shadow-lg">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 text-indigo-600">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v4m0 4v4M6 12h4m4 0h4" />
            </svg>
          </div>
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 drop-shadow-sm">Image Compressor</h2>
            <p className="text-gray-800 text-sm sm:text-base">Upload a photo to compress it to WebP while keeping visual quality high.</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-gray-700">Uses server-side Sharp (quality 80, max width 1600px). Max upload 15MB.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-4 sm:p-5 shadow-sm">
        <p className="text-sm sm:text-base font-semibold text-gray-900 mb-3 drop-shadow-sm">Choose compression type</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setCompressionFormat('original')}
            className={`w-full px-4 py-3 rounded-lg border transition-colors text-left ${
              compressionFormat === 'original'
                ? 'border-indigo-500 bg-indigo-50 text-indigo-800 shadow-sm'
                : 'border-white/50 bg-white/30 text-gray-800 hover:border-indigo-300'
            }`}
          >
            <div className="font-semibold">Size Compress</div>
            <div className="text-xs text-gray-700 mt-1">Keep original format (JPG/PNG) and reduce size</div>
          </button>
          <button
            type="button"
            onClick={() => setCompressionFormat('webp')}
            className={`w-full px-4 py-3 rounded-lg border transition-colors text-left ${
              compressionFormat === 'webp'
                ? 'border-indigo-500 bg-indigo-50 text-indigo-800 shadow-sm'
                : 'border-white/50 bg-white/30 text-gray-800 hover:border-indigo-300'
            }`}
          >
            <div className="font-semibold">Compressed (WebP)</div>
            <div className="text-xs text-gray-700 mt-1">Convert to WebP for maximum savings</div>
          </button>
        </div>
      </div>

      <UploadBox onImageSelect={handleCompressSelect} isProcessing={isCompressing} />

      {compressionError && (
        <div className="max-w-2xl mx-auto p-3 sm:p-4 bg-red-500/20 border border-red-400/60 text-red-800 rounded-lg text-sm sm:text-base">
          {compressionError}
        </div>
      )}

      {compressionProgress > 0 && (
        <div className="max-w-2xl mx-auto w-full bg-white/50 backdrop-blur-md rounded-lg shadow-sm border border-white/40 p-3 sm:p-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${Math.min(compressionProgress, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs sm:text-sm text-gray-700 mt-2">
            <span>Preparing...</span>
            <span className="font-semibold text-indigo-700">{Math.min(compressionProgress, 100)}%</span>
          </div>
        </div>
      )}

      {(compressionInput || compressedImage) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {compressionInput && (
            <MemoizedImagePreview
              title="Original"
              imageUrl={compressionInput}
            />
          )}
          {compressedImage && (
            <MemoizedImagePreview
              title={compressionFormat === 'webp' ? 'Compressed (WebP)' : 'Compressed'}
              imageUrl={compressedImage}
            />
          )}
        </div>
      )}

      {compressionStats && (
        <div className="max-w-2xl mx-auto bg-white/30 backdrop-blur-md border border-white/40 rounded-xl p-4 sm:p-5 shadow-sm">
          <div className="flex items-center justify-between text-sm sm:text-base text-gray-800">
            <span className="font-medium">Original size</span>
            <span className="font-semibold text-gray-900">{formatBytes(compressionStats.originalSize)}</span>
          </div>
          <div className="flex items-center justify-between text-sm sm:text-base text-gray-800 mt-2">
            <span className="font-medium">Compressed size</span>
            <span className="font-semibold text-gray-900">{formatBytes(compressionStats.compressedSize)}</span>
          </div>
          <div className="flex items-center justify-between text-sm sm:text-base text-gray-800 mt-2">
            <span className="font-medium">Format</span>
            <span className="font-semibold text-gray-900 uppercase">{extensionFromMime(compressionStats.mimeType)}</span>
          </div>
          <div className="flex items-center justify-between text-sm sm:text-base text-gray-800 mt-2">
            <span className="font-medium">Saved</span>
            <span className="font-semibold text-emerald-700">
              {compressionStats?.originalSize && compressionStats?.compressedSize
                ? `${Math.max(0, Math.round((1 - (compressionStats.compressedSize / compressionStats.originalSize)) * 100))}%`
                : '--'}
            </span>
          </div>
        </div>
      )}

      {(compressionInput || compressedImage) && (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          {compressedImage && (
            <button
              onClick={handleDownloadCompressed}
              className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg touch-manipulation"
            >
              {compressionFormat === 'webp' ? 'Download WebP' : 'Download Image'}
            </button>
          )}
          <button
            onClick={resetCompression}
            className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(ImageCompressorSection)


