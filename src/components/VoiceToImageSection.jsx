import { memo } from 'react'

function VoiceToImageSection({
  isListening,
  transcript,
  voiceError,
  setVoiceError,
  imageError,
  setImageError,
  isGenerating,
  generatedImage,
  onStartListening,
  onStopListening,
  onCopyTranscript,
  onGenerateFromTranscript,
  onClearTranscript,
  onDownloadGeneratedImage,
  onClearGeneratedImage,
  LottieLoader,
  VoiceRecordingAnimation,
  VoiceToTextIcon
}) {
  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/30 shadow-lg">
        <div className="text-center mb-6">
          {isListening ? (
            <div className="mb-4 flex items-center justify-center">
              <VoiceRecordingAnimation />
            </div>
          ) : (
            <div className="mb-4 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600">
                <VoiceToTextIcon />
              </div>
            </div>
          )}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 drop-shadow-sm">Voice to Image</h2>
          <p className="text-gray-800 text-sm sm:text-base drop-shadow-sm">Speak clearly and your words will be converted to text, then generate an image</p>
        </div>

        {voiceError && (
          <div className="mb-4 p-3 bg-red-500/30 backdrop-blur-md border border-red-400/50 rounded-lg">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-red-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <p className="text-red-900 text-sm font-medium mb-1 drop-shadow-sm">Error</p>
                <p className="text-red-800 text-sm drop-shadow-sm">{voiceError}</p>
                {voiceError.includes('Network') && (
                  <div className="mt-2 text-xs text-red-800 drop-shadow-sm">
                    <p className="mb-1 font-medium">Troubleshooting tips:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Check your internet connection</li>
                      <li>Try refreshing the page</li>
                      <li>Check if firewall is blocking the connection</li>
                      <li>Try using Chrome or Edge browser</li>
                    </ul>
                  </div>
                )}
              </div>
              <button
                onClick={() => setVoiceError(null)}
                className="text-red-600 hover:text-red-800 flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Transcript Display */}
        <div className="mb-6">
          <div className="bg-white/30 backdrop-blur-md rounded-lg p-4 sm:p-6 min-h-[200px] max-h-[400px] overflow-y-auto border border-white/30">
            {transcript ? (
              <p className="text-gray-900 text-base sm:text-lg leading-relaxed whitespace-pre-wrap drop-shadow-sm">
                {transcript}
              </p>
            ) : (
              <p className="text-gray-600 text-sm sm:text-base italic text-center drop-shadow-sm">
                {isListening ? 'Listening... Start speaking...' : 'Click "Start Listening" to begin transcription'}
              </p>
            )}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          {!isListening ? (
            <button
              onClick={onStartListening}
              className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg touch-manipulation flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Start Listening
            </button>
          ) : (
            <button
              onClick={onStopListening}
              className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 active:bg-red-800 transition-colors shadow-lg touch-manipulation flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
              Stop Listening
            </button>
          )}

          {transcript && (
            <>
              <button
                onClick={onCopyTranscript}
                className="w-full sm:w-auto px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 active:bg-gray-800 transition-colors touch-manipulation flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Text
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onGenerateFromTranscript()
                }}
                className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors touch-manipulation flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Generate Image
              </button>
              <button
                onClick={onClearTranscript}
                className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
              >
                Clear
              </button>
            </>
          )}
        </div>

        {isListening && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-red-600 text-sm font-medium">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              Listening...
            </div>
          </div>
        )}

        {/* Generated Image Display within Voice to Image */}
        {isGenerating && (
          <div className="mt-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <LottieLoader />
            </div>
            <p className="text-gray-900 text-base sm:text-lg font-medium drop-shadow-sm">
              Generating your image from transcript... This may take 10-30 seconds
            </p>
          </div>
        )}

        {imageError && (
          <div className="mt-6 p-3 bg-red-500/30 backdrop-blur-md border border-red-400/50 rounded-lg">
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

        {generatedImage && (
          <div className="space-y-4 mt-6">
            <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/30">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 drop-shadow-sm">Generated Image</h3>
              <div className="relative w-full min-h-[400px] max-h-[80vh] bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/40 flex items-center justify-center">
                <img
                  src={generatedImage}
                  alt="Generated from voice"
                  className="w-full h-auto max-h-[80vh] object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const imageUrl = generatedImage
                    console.error('Image failed to load:', typeof imageUrl === 'string' ? imageUrl : 'Invalid image URL')
                    setImageError('Failed to load the generated image. The URL may be invalid or expired.')
                    onClearGeneratedImage(true)
                    if (e?.target) {
                      e.target.style.display = 'none'
                    }
                  }}
                  onLoad={() => {
                    console.log('Image loaded successfully:', generatedImage)
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
                onClick={() => onClearGeneratedImage(true)}
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

export default memo(VoiceToImageSection)


