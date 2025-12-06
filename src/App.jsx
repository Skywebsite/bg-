import { useState, memo } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import UploadBox from './components/UploadBox'
import ImagePreview from './components/ImagePreview'
import bgImage from './pexels-lum3n-44775-406014.jpg'

// Memoized Lottie loader component for better performance
const LottieLoader = memo(() => (
  <div 
    className="w-48 h-48 md:w-64 md:h-64"
    style={{
      willChange: 'transform',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      perspective: '1000px',
      isolation: 'isolate'
    }}
  >
    <DotLottieReact
      src="https://lottie.host/d9473dcc-5bd8-44a6-8377-93be63a7bc57/7WpzhfhTDM.lottie"
      loop
      autoplay
    />
  </div>
))
LottieLoader.displayName = 'LottieLoader'

// Memoized ImagePreview for better performance
const MemoizedImagePreview = memo(ImagePreview)
MemoizedImagePreview.displayName = 'MemoizedImagePreview'

// Helper function to resize image for faster processing
function resizeImage(file, maxWidth = 512, maxHeight = 512) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        let width = img.width
        let height = img.height

        // Calculate new dimensions - more aggressive resizing for speed
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        if (ratio < 1) {
          width = Math.floor(width * ratio)
          height = Math.floor(height * ratio)
        }

        // Create canvas and resize with optimized settings
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d', { 
          willReadFrequently: false,
          desynchronized: true 
        })
        
        // Use faster image smoothing
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = 'low'
        ctx.drawImage(img, 0, 0, width, height)

        // Lower quality for faster processing
        canvas.toBlob((blob) => {
          resolve(blob || file)
        }, file.type, 0.8)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  })
}

function App() {
  const [originalImage, setOriginalImage] = useState(null)
  const [processedImage, setProcessedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [error, setError] = useState(null)

  const handleImageSelect = async (file) => {
    // Reset states
    setError(null)
    setProcessedImage(null)
    setProcessingProgress(0)
    
    // Validate file
    if (!file) {
      setError('No file selected')
      return
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file')
      return
    }

    // Check file size (warn if > 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      setError('File is large (>10MB). Resizing for faster processing...')
    }

    // Create preview URL for original image
    const originalUrl = URL.createObjectURL(file)
    setOriginalImage(originalUrl)

    // Process the image
    setIsProcessing(true)
    setProcessingProgress(10)

    try {
      // Step 1: Resize image aggressively for faster processing
      setProcessingProgress(20)
      const resizedBlob = await resizeImage(file, 512, 512)
      setProcessingProgress(40)

      // Step 2: Convert to ArrayBuffer
      const buffer = await resizedBlob.arrayBuffer()
      const uint8Array = new Uint8Array(buffer)
      setProcessingProgress(50)

      // Step 3: Import and use background removal
      setProcessingProgress(60)
      const { removeBackground } = await import('@imgly/background-removal')
      
      // Create a shorter timeout promise for faster feedback
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Processing timeout after 90 seconds')), 90000)
      })

      // Process with optimized settings for speed
      setProcessingProgress(70)
      let blob
      try {
        // Use Blob with optimized options for faster processing
        blob = await Promise.race([
          removeBackground(resizedBlob, {
            model: 'medium', // Use medium model for balance between speed and quality
            output: {
              format: 'image/png',
              quality: 0.9
            },
            progress: (key, current, total) => {
              const progress = 70 + Math.floor((current / total) * 25)
              setProcessingProgress(Math.min(progress, 95))
            }
          }),
          timeoutPromise
        ])
      } catch (blobError) {
        // Fallback to Uint8Array if Blob doesn't work
        setProcessingProgress(70)
        blob = await Promise.race([
          removeBackground(uint8Array, {
            model: 'medium',
            output: {
              format: 'image/png',
              quality: 0.9
            },
            progress: (key, current, total) => {
              const progress = 70 + Math.floor((current / total) * 25)
              setProcessingProgress(Math.min(progress, 95))
            }
          }),
          timeoutPromise
        ])
      }

      setProcessingProgress(95)
      
      // Create object URL for processed image
      const processedUrl = URL.createObjectURL(blob)
      setProcessedImage(processedUrl)
      setProcessingProgress(100)
      
      // Clear any warnings
      if (error && error.includes('large')) {
        setError(null)
      }
    } catch (err) {
      console.error('Background removal failed:', err)
      if (err.message.includes('timeout')) {
        setError('Processing took too long. Please try a smaller image or check your connection.')
      } else {
        setError(`Failed to remove background: ${err.message || 'Unknown error'}. Please try another image.`)
      }
      setProcessingProgress(0)
    } finally {
      setIsProcessing(false)
      setTimeout(() => setProcessingProgress(0), 1000)
    }
  }

  const handleReset = () => {
    // Clean up object URLs to prevent memory leaks
    if (originalImage) {
      URL.revokeObjectURL(originalImage)
    }
    if (processedImage) {
      URL.revokeObjectURL(processedImage)
    }
    
    setOriginalImage(null)
    setProcessedImage(null)
    setError(null)
    setIsProcessing(false)
    setProcessingProgress(0)
  }

  const handleDownload = () => {
    if (!processedImage) return

    const link = document.createElement('a')
    link.href = processedImage
    link.download = 'background-removed.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={`min-h-screen py-8 px-4 relative overflow-hidden ${!originalImage ? '' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Background Image - Only show on home page */}
      {!originalImage && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            margin: 0,
            padding: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <img
            src={bgImage}
            alt="Background"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
            }}
            loading="eager"
            decoding="async"
          />
        </div>
      )}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-2 inline-block px-6 py-3 rounded-lg drop-shadow-lg ${
            !originalImage 
              ? 'text-white bg-black/50 backdrop-blur-sm' 
              : 'text-gray-800 bg-white/90'
          }`}>
            Easy BG Remover
          </h1>
        </header>

        {!originalImage && (
          <UploadBox
            onImageSelect={handleImageSelect}
            isProcessing={isProcessing}
          />
        )}

        {error && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">{error}</p>
          </div>
        )}

        {isProcessing && (
          <div className="max-w-2xl mx-auto mb-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <LottieLoader />
            </div>
            <p className="mt-4 text-gray-600 text-lg font-medium">
              Processing image... {processingProgress > 0 && `${processingProgress}%`}
            </p>
            {processingProgress < 30 && (
              <p className="mt-2 text-sm text-gray-500">
                First time? Downloading AI models (this may take 1-2 minutes)...
              </p>
            )}
            <div className="mt-4 w-full max-w-md mx-auto bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${processingProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {(originalImage || processedImage) && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {processedImage && (
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                >
                  Download PNG
                </button>
              )}
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Remove Another Image
              </button>
            </div>
          </div>
        )}

        <footer className="mt-12 text-center">
          <p className={`text-sm drop-shadow-lg ${
            !originalImage ? 'text-white' : 'text-gray-600'
          }`}>
            Powered by{' '}
            <a 
              href="https://www.skywebdev.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`underline transition-colors ${
                !originalImage 
                  ? 'text-white hover:text-indigo-200' 
                  : 'text-indigo-600 hover:text-indigo-800'
              }`}
            >
              Skyweb IT Solution Pvt Ltd
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App

