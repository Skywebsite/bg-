import { useState, useEffect, memo } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import UploadBox from './components/UploadBox'
import ImagePreview from './components/ImagePreview'
import logoImage from './components/Black White Minimal Simple Modern  Classic  Photography Studio Salt Logo.png'

// Memoized Lottie loader component for better performance
const LottieLoader = memo(() => {
  return (
    <div 
      className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64"
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
  )
})
LottieLoader.displayName = 'LottieLoader'

// Background Lottie Animation Component
const BackgroundAnimation = memo(() => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          willChange: 'transform',
          transform: 'translateZ(0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
          }}
        >
          <DotLottieReact
            src="https://lottie.host/9a87f871-d4aa-491f-ad56-457d964c3d9f/mrOC4Uc29S.lottie"
            loop
            autoplay
            style={{
              width: '100vw',
              height: '100vh',
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
        </div>
      </div>
    </div>
  )
})
BackgroundAnimation.displayName = 'BackgroundAnimation'

// Memoized Lottie animation for voice recording
const VoiceRecordingAnimation = memo(() => {
  return (
    <div 
      className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        isolation: 'isolate'
      }}
    >
      <DotLottieReact
        src="https://lottie.host/1626551d-04fe-40c3-8df8-a41df5186f43/gmnnuwijJ7.lottie"
        loop
        autoplay
      />
    </div>
  )
})
VoiceRecordingAnimation.displayName = 'VoiceRecordingAnimation'

// Memoized ImagePreview for better performance
const MemoizedImagePreview = memo(ImagePreview)
MemoizedImagePreview.displayName = 'MemoizedImagePreview'

// Icon Components - Memoized for better performance with distinct, non-overlapping designs
const VoiceToTextIcon = memo(() => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ willChange: 'auto', isolation: 'isolate' }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
))
VoiceToTextIcon.displayName = 'VoiceToTextIcon'

const TextImageIcon = memo(() => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ willChange: 'auto', isolation: 'isolate' }}>
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6M7 16h4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 14l2.5 2.5M16.5 14l-2.5 2.5" />
    <circle cx="15.5" cy="15.5" r="2.5" strokeWidth={1.5} fill="none" opacity="0.3" />
  </svg>
))
TextImageIcon.displayName = 'TextImageIcon'

const BGRemoverIcon = memo(() => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ willChange: 'auto', isolation: 'isolate' }}>
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 9l6 6M15 9l-6 6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5l14 14" opacity="0.3" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.5} fill="none" opacity="0.2" />
  </svg>
))
BGRemoverIcon.displayName = 'BGRemoverIcon'

const ImageCompressorIcon = memo(() => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ willChange: 'auto', isolation: 'isolate' }}>
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v4m0 4v4M6 12h4m4 0h4" />
  </svg>
))
ImageCompressorIcon.displayName = 'ImageCompressorIcon'

// Helper function to detect mobile device
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.innerWidth <= 768)
}

// Helper function to resize image for faster processing
function resizeImage(file, maxWidth = 512, maxHeight = 512) {
  return new Promise((resolve) => {
    // Use smaller dimensions on mobile for faster processing
    const isMobile = isMobileDevice()
    const fileSizeMB = file.size / (1024 * 1024)
    
    // More aggressive resizing for larger files to ensure fast processing
    let actualMaxWidth, actualMaxHeight
    
    if (isMobile) {
      // Mobile: smaller dimensions, more aggressive for large files
      if (fileSizeMB > 15) {
        actualMaxWidth = 320
        actualMaxHeight = 320
      } else if (fileSizeMB > 10) {
        actualMaxWidth = 360
        actualMaxHeight = 360
      } else {
        actualMaxWidth = 384
        actualMaxHeight = 384
      }
    } else {
      // Desktop: adjust based on file size
      if (fileSizeMB > 20) {
        actualMaxWidth = 480
        actualMaxHeight = 480
      } else if (fileSizeMB > 15) {
        actualMaxWidth = 512
        actualMaxHeight = 512
      } else if (fileSizeMB > 10) {
        actualMaxWidth = 640
        actualMaxHeight = 640
      } else {
        actualMaxWidth = maxWidth
        actualMaxHeight = maxHeight
      }
    }
    
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        let width = img.width
        let height = img.height

        // Calculate new dimensions - more aggressive resizing for speed
        const ratio = Math.min(actualMaxWidth / width, actualMaxHeight / height)
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

        // Lower quality for faster processing - more aggressive for large files
        let quality
        if (fileSizeMB > 15) {
          quality = isMobile ? 0.6 : 0.7
        } else if (fileSizeMB > 10) {
          quality = isMobile ? 0.65 : 0.75
        } else {
          quality = isMobile ? 0.7 : 0.8
        }
        
        canvas.toBlob((blob) => {
          resolve(blob || file)
        }, file.type, quality)
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
  const [activeFeature, setActiveFeature] = useState('voice-to-text') // Track active feature - default to Voice to Text
  
  // Voice to Text states
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [recognition, setRecognition] = useState(null)
  const [voiceError, setVoiceError] = useState(null)
  
  // Text to Image states
  const [textPrompt, setTextPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [imageError, setImageError] = useState(null)

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

    // Check file size - no warning needed, we'll auto-optimize for fast processing
    // Large files will be automatically resized more aggressively

    // Create preview URL for original image
    const originalUrl = URL.createObjectURL(file)
    setOriginalImage(originalUrl)

    // Process the image
    setIsProcessing(true)
    setProcessingProgress(10)

    try {
      // Step 1: Resize image aggressively for faster processing
      // Resize dimensions are automatically adjusted based on file size
      setProcessingProgress(20)
      const resizedBlob = await resizeImage(file, 640, 640)
      setProcessingProgress(40)

      // Step 2: Convert to ArrayBuffer
      const buffer = await resizedBlob.arrayBuffer()
      const uint8Array = new Uint8Array(buffer)
      setProcessingProgress(50)

      // Step 3: Import and use background removal
      setProcessingProgress(60)
      const { removeBackground } = await import('@imgly/background-removal')
      
      // Detect mobile for model selection
      const isMobile = isMobileDevice()
      
      // Create a shorter timeout promise for faster feedback (shorter on mobile)
      const timeoutDuration = isMobile ? 120000 : 90000 // 2 minutes on mobile, 90s on desktop
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Processing timeout after ' + (timeoutDuration / 1000) + ' seconds')), timeoutDuration)
      })

      // Process with optimized settings for speed
      // Adjust model based on file size and device for fastest processing
      const fileSizeMB = file.size / (1024 * 1024)
      let model, outputQuality
      
      if (isMobile) {
        // Always use small model on mobile for speed
        model = 'small'
        outputQuality = fileSizeMB > 15 ? 0.8 : 0.85
      } else {
        // Use small model for large files (>15MB) for faster processing
        model = fileSizeMB > 15 ? 'small' : 'medium'
        outputQuality = fileSizeMB > 15 ? 0.85 : 0.9
      }
      
      setProcessingProgress(70)
      let blob
      try {
        // Use Blob with optimized options for faster processing
        blob = await Promise.race([
          removeBackground(resizedBlob, {
            model: model,
            output: {
              format: 'image/png',
              quality: outputQuality
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
            model: model,
            output: {
              format: 'image/png',
              quality: outputQuality
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
    } catch (err) {
      const errorMsg = err?.message || String(err) || 'Unknown error'
      console.error('Background removal failed:', errorMsg)
      if (errorMsg.includes('timeout')) {
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

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.continuous = true
        recognitionInstance.interimResults = true
        recognitionInstance.lang = 'en-US'

        recognitionInstance.onresult = (event) => {
          let interimTranscript = ''
          let newFinalTranscript = ''

          for (let i = 0; i < event.resultIndex; i++) {
            if (event.results[i].isFinal) {
              newFinalTranscript += event.results[i][0].transcript + ' '
            }
          }

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
              newFinalTranscript += transcript + ' '
            } else {
              interimTranscript += transcript
            }
          }

          // Update transcript with all final results + current interim
          setTranscript(newFinalTranscript + interimTranscript)
        }

        recognitionInstance.onerror = (event) => {
          const errorType = event?.error || 'unknown'
          console.error('Speech recognition error:', errorType)
          let errorMessage = ''
          
          switch(event.error) {
            case 'network':
              errorMessage = 'Network error: Unable to connect to speech recognition service. Please check your internet connection and try again.'
              break
            case 'no-speech':
              errorMessage = 'No speech detected. Please speak clearly into your microphone.'
              break
            case 'audio-capture':
              errorMessage = 'Microphone error: No microphone found or microphone access denied. Please check your microphone settings.'
              break
            case 'not-allowed':
              errorMessage = 'Permission denied: Please allow microphone access in your browser settings.'
              break
            case 'aborted':
              errorMessage = 'Speech recognition was aborted.'
              break
            case 'service-not-allowed':
              errorMessage = 'Speech recognition service is not allowed. Please check your browser settings.'
              break
            default:
              errorMessage = `Speech recognition error: ${event.error}. Please try again.`
          }
          
          setVoiceError(errorMessage)
          setIsListening(false)
          
          // Auto-retry for network errors after a short delay
          if (event.error === 'network') {
            setTimeout(() => {
              if (isListening === false) {
                setVoiceError('Network error occurred. You can try clicking "Start Listening" again.')
              }
            }, 2000)
          }
        }

        recognitionInstance.onend = () => {
          setIsListening(false)
        }

        setRecognition(recognitionInstance)
      } else {
        setVoiceError('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.')
      }
    }

    // Cleanup on unmount
    return () => {
      if (recognition) {
        recognition.stop()
      }
    }
  }, [])

  // Cleanup recognition on unmount or feature change
  useEffect(() => {
    return () => {
      if (recognition && isListening) {
        recognition.stop()
        setIsListening(false)
      }
    }
  }, [activeFeature])

  // Handle voice to text start/stop
  const handleStartListening = () => {
    if (recognition && !isListening) {
      setVoiceError(null)
      setIsListening(true)
      try {
        // Clear any previous errors and start fresh
        recognition.start()
      } catch (err) {
        const errorMsg = err?.message || String(err) || 'Unknown error'
        console.error('Failed to start recognition:', errorMsg)
        // Check if already started (ignore that error)
        if (errorMsg && !errorMsg.includes('already')) {
          setVoiceError('Failed to start voice recognition. Please check your microphone and try again.')
        }
        setIsListening(false)
      }
    } else if (!recognition) {
      setVoiceError('Speech recognition is not available. Please use Chrome, Edge, or Safari browser.')
    }
  }

  const handleStopListening = () => {
    if (recognition && isListening) {
      setIsListening(false)
      recognition.stop()
    }
  }

  const handleClearTranscript = () => {
    setTranscript('')
    setVoiceError(null)
  }

  const handleCopyTranscript = () => {
    if (transcript) {
      navigator.clipboard.writeText(transcript).then(() => {
        // Show feedback (you could add a toast here)
        alert('Text copied to clipboard!')
      }).catch(err => {
        const errorMsg = err?.message || String(err) || 'Unknown error'
        console.error('Failed to copy:', errorMsg)
      })
    }
  }

  // Generate image from voice transcript - stays on Voice to Text page
  const handleGenerateImageFromTranscript = async () => {
    if (!transcript.trim()) {
      setVoiceError('No transcript available. Please record your voice first.')
      return
    }

    // Generate image directly without switching features - stay on voice-to-text page
    await handleGenerateImage(transcript.trim())
  }

  // Update handleGenerateImage to accept optional prompt parameter
  const handleGenerateImage = async (promptOverride = null) => {
    // Ensure promptOverride is a string, not an event object
    let actualPrompt = null
    if (promptOverride && typeof promptOverride === 'string') {
      actualPrompt = promptOverride
    } else if (promptOverride && promptOverride?.target) {
      // If event object passed, ignore it
      actualPrompt = null
    }
    const promptText = actualPrompt || textPrompt.trim()
    
    if (!promptText) {
      setImageError('Please enter a text description')
      return
    }

    setIsGenerating(true)
    setImageError(null)
    setGeneratedImage(null)

    try {
      console.log('Starting image generation with prompt:', promptText)
      
      // Call backend API - use proxy in development (empty string uses relative URL through Vite proxy)
      // In production, use VITE_API_URL or default to localhost:3001
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : 'http://localhost:3001')
      const apiEndpoint = `${API_URL}/api/generate-image`
      console.log('Calling API endpoint:', apiEndpoint)
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: promptText }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image')
      }

      if (!data.success || !data.imageUrl) {
        throw new Error('Invalid response from server')
      }

      const imageUrl = data.imageUrl
      console.log('Received image URL from backend:', imageUrl)

      // Validate and set the image URL
      if (typeof imageUrl === 'string') {
        // Ensure URL is valid
        let finalUrl = imageUrl
        if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://') && !imageUrl.startsWith('data:')) {
          // Try to fix relative URLs
          const baseUrl = API_URL || window.location.origin
          finalUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : 
                     imageUrl.startsWith('/') ? `${baseUrl}${imageUrl}` :
                     `https://${imageUrl}`
        }
        
        console.log('Setting generated image URL:', finalUrl)
        
        // Fetch image as blob to avoid CORS/COEP issues
        try {
          const fetchResponse = await fetch(finalUrl, {
            mode: 'cors',
            credentials: 'omit'
          })
          
          if (!fetchResponse.ok) {
            throw new Error(`Failed to fetch image: ${fetchResponse.status} ${fetchResponse.statusText}`)
          }
          
          const blob = await fetchResponse.blob()
          const blobUrl = URL.createObjectURL(blob)
          console.log('Created blob URL from fetched image')
          setGeneratedImage(blobUrl)
        } catch (fetchError) {
          const errorMsg = fetchError?.message || String(fetchError) || 'Unknown error'
          console.error('Error fetching image as blob:', errorMsg)
          // Fallback: try to use the URL directly (might work in some browsers)
          console.log('Falling back to direct URL usage')
          setGeneratedImage(finalUrl)
        }
      } else {
        setImageError('Invalid image URL format received from API')
      }
    } catch (err) {
      // Safely extract error message without circular references
      const errorMessage = err?.message || err?.toString() || String(err) || 'Failed to generate image. Please check your connection and try again.'
      console.error('Image generation error:', errorMessage)
      setImageError(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleClearGeneratedImage = (keepTranscript = false) => {
    // Clean up blob URL to prevent memory leaks
    if (generatedImage && generatedImage.startsWith('blob:')) {
      URL.revokeObjectURL(generatedImage)
    }
    setGeneratedImage(null)
    // Only clear textPrompt if we're not keeping transcript (i.e., from text-image feature)
    if (!keepTranscript) {
      setTextPrompt('')
    }
    setImageError(null)
  }

  const handleDownloadGeneratedImage = () => {
    if (!generatedImage) return

    const link = document.createElement('a')
    link.href = generatedImage
    link.download = 'generated-image.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={`min-h-screen py-4 sm:py-8 px-3 sm:px-4 relative overflow-hidden ${!originalImage ? '' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      {/* Background Lottie Animation - Only show on home page */}
      {!originalImage && <BackgroundAnimation />}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-4 sm:mb-8">
          <div className="flex justify-center items-center mb-2">
            <img 
              src={logoImage} 
              alt="Sky Pixels" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
              style={{ maxWidth: '100%' }}
            />
          </div>
        </header>

        {/* Feature Buttons */}
        {!originalImage && (
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8 px-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <button
                onClick={() => setActiveFeature('voice-to-text')}
                className={`feature-btn p-4 sm:p-5 rounded-xl font-semibold text-sm sm:text-base touch-manipulation ${
                  activeFeature === 'voice-to-text'
                    ? 'bg-indigo-600/90 text-white shadow-lg scale-[1.02] sm:scale-105 backdrop-blur-sm'
                    : 'bg-white/30 text-gray-800 hover:bg-white/50 hover:shadow-md active:scale-[0.98] backdrop-blur-md border border-white/20'
                }`}
              >
                <div className="mb-2 flex items-center justify-center h-7 sm:h-8">
                  <VoiceToTextIcon />
                </div>
                <div>Voice to Text</div>
              </button>
              
              <button
                onClick={() => setActiveFeature('text-image')}
                className={`feature-btn p-4 sm:p-5 rounded-xl font-semibold text-sm sm:text-base touch-manipulation ${
                  activeFeature === 'text-image'
                    ? 'bg-indigo-600/90 text-white shadow-lg scale-[1.02] sm:scale-105 backdrop-blur-sm'
                    : 'bg-white/30 text-gray-800 hover:bg-white/50 hover:shadow-md active:scale-[0.98] backdrop-blur-md border border-white/20'
                }`}
              >
                <div className="mb-2 flex items-center justify-center h-7 sm:h-8">
                  <TextImageIcon />
                </div>
                <div>Text to Image</div>
              </button>
              
              <button
                onClick={() => setActiveFeature('bg-remover')}
                className={`feature-btn p-4 sm:p-5 rounded-xl font-semibold text-sm sm:text-base touch-manipulation ${
                  activeFeature === 'bg-remover'
                    ? 'bg-indigo-600/90 text-white shadow-lg scale-[1.02] sm:scale-105 backdrop-blur-sm'
                    : 'bg-white/30 text-gray-800 hover:bg-white/50 hover:shadow-md active:scale-[0.98] backdrop-blur-md border border-white/20'
                }`}
              >
                <div className="mb-2 flex items-center justify-center h-7 sm:h-8">
                  <BGRemoverIcon />
                </div>
                <div>BG Remover</div>
              </button>
              
              <button
                onClick={() => setActiveFeature('image-compressor')}
                className={`feature-btn p-4 sm:p-5 rounded-xl font-semibold text-sm sm:text-base touch-manipulation ${
                  activeFeature === 'image-compressor'
                    ? 'bg-indigo-600/90 text-white shadow-lg scale-[1.02] sm:scale-105 backdrop-blur-sm'
                    : 'bg-white/30 text-gray-800 hover:bg-white/50 hover:shadow-md active:scale-[0.98] backdrop-blur-md border border-white/20'
                }`}
              >
                <div className="mb-2 flex items-center justify-center h-7 sm:h-8">
                  <ImageCompressorIcon />
                </div>
                <div>Image Compressor</div>
              </button>
            </div>
          </div>
        )}

        {!originalImage && activeFeature === 'bg-remover' && (
          <UploadBox
            onImageSelect={handleImageSelect}
            isProcessing={isProcessing}
          />
        )}

        {!originalImage && activeFeature === 'voice-to-text' && (
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
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 drop-shadow-sm">Voice to Text</h2>
                <p className="text-gray-800 text-sm sm:text-base drop-shadow-sm">Speak clearly and your words will be converted to text in real-time</p>
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
                    onClick={handleStartListening}
                    className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg touch-manipulation flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    Start Listening
                  </button>
                ) : (
                  <button
                    onClick={handleStopListening}
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
                      onClick={handleCopyTranscript}
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
                        handleGenerateImageFromTranscript()
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 active:bg-purple-800 transition-colors touch-manipulation flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Generate Image
                    </button>
                    <button
                      onClick={handleClearTranscript}
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

              {/* Generated Image Display within Voice to Text */}
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

              {imageError && activeFeature === 'voice-to-text' && (
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

              {generatedImage && activeFeature === 'voice-to-text' && (
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
                          setGeneratedImage(null)
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
                      onClick={handleDownloadGeneratedImage}
                      className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors touch-manipulation flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Image
                    </button>
                    <button
                      onClick={() => handleClearGeneratedImage(true)}
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
                    >
                      Clear Image
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {!originalImage && activeFeature === 'text-image' && (
          <div className="max-w-3xl mx-auto px-2">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/30 shadow-lg">
              <div className="text-center mb-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600">
                    <TextImageIcon />
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
                    handleGenerateImage()
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
                    onClick={handleClearGeneratedImage}
                    className="px-4 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 active:bg-gray-400 transition-colors touch-manipulation"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Generated Image Display */}
              {isGenerating && (
                <div className="mb-6 text-center">
                  <div className="flex justify-center items-center mb-4">
                    <LottieLoader />
                  </div>
                  <p className="text-gray-900 text-base sm:text-lg font-medium drop-shadow-sm">
                    Generating your image... This may take 10-30 seconds
                  </p>
                </div>
              )}

              {generatedImage && (
                <div className="space-y-4 mt-6">
                  <div className="bg-white/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-white/30">
                    <div className="relative w-full min-h-[400px] max-h-[80vh] bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/40 flex items-center justify-center">
                      <img
                        src={generatedImage}
                        alt="Generated"
                        className="w-full h-auto max-h-[80vh] object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const imageUrl = generatedImage
                          console.error('Image failed to load:', typeof imageUrl === 'string' ? imageUrl : 'Invalid image URL')
                          setImageError('Failed to load the generated image. The URL may be invalid or expired.')
                          setGeneratedImage(null)
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
                      onClick={handleDownloadGeneratedImage}
                      className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg touch-manipulation"
                    >
                      Download Image
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {!originalImage && activeFeature === 'image-compressor' && (
          <div className="max-w-2xl mx-auto px-2">
            <div className="bg-white/30 backdrop-blur-md rounded-xl p-8 sm:p-12 text-center border-2 border-dashed border-white/40 shadow-lg">
              <div className="mb-4 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600">
                  <ImageCompressorIcon />
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 drop-shadow-sm">Image Compressor</h2>
              <p className="text-gray-800 mb-4 drop-shadow-sm">Coming soon! This feature will compress your images while maintaining quality.</p>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors opacity-50 cursor-not-allowed" disabled>
                Compress Image
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-yellow-500/30 backdrop-blur-md border border-yellow-400/50 rounded-lg">
            <p className="text-yellow-900 text-sm sm:text-base drop-shadow-sm">{error}</p>
          </div>
        )}

        {isProcessing && (
          <div className="max-w-2xl mx-auto mb-4 sm:mb-6 text-center px-2">
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <LottieLoader />
            </div>
            <p className="mt-2 sm:mt-4 text-gray-600 text-base sm:text-lg font-medium">
              Processing image... {processingProgress > 0 && `${processingProgress}%`}
            </p>
            {processingProgress < 30 && (
              <p className="mt-2 text-xs sm:text-sm text-gray-500 px-2">
                First time? Downloading AI models (this may take 1-2 minutes)...
              </p>
            )}
            <div className="mt-4 sm:mt-5 w-full max-w-md mx-auto">
              <div className="relative w-full bg-gray-200 rounded-full h-3 sm:h-4 overflow-hidden shadow-inner">
                <div
                  className="progress-bar-fill h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                  style={{ width: `${processingProgress}%` }}
                >
                  <div className="progress-bar-shimmer"></div>
                </div>
              </div>
              {processingProgress > 0 && (
                <div className="mt-2 flex justify-between items-center text-xs sm:text-sm text-gray-500">
                  <span>0%</span>
                  <span className="font-semibold text-indigo-600">{processingProgress}%</span>
                  <span>100%</span>
                </div>
              )}
            </div>
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

        <footer className="mt-8 sm:mt-12 mb-4 sm:mb-6 text-center px-2">
          <p className={`text-xs sm:text-sm drop-shadow-lg ${
            !originalImage ? 'text-white' : 'text-gray-600'
          }`}>
            Powered by{' '}
            <a 
              href="https://www.skywebdev.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`underline transition-colors touch-manipulation ${
                !originalImage 
                  ? 'text-white hover:text-indigo-200 active:text-indigo-300' 
                  : 'text-indigo-600 hover:text-indigo-800 active:text-indigo-900'
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

