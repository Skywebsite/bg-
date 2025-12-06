# Background Remover

A frontend-only web application that removes backgrounds from images using AI-powered WebAssembly technology. Everything runs entirely in the browser - no backend required!

## Features

- 🎨 **Drag & Drop Upload** - Easy image upload interface
- 🤖 **AI-Powered** - Uses @imgly/background-removal with WebAssembly
- ⚡ **Fast & Efficient** - All processing happens in the browser
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🎯 **Zero Backend** - 100% client-side processing
- 💾 **PNG Export** - Download images with transparent backgrounds

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **@imgly/background-removal** - WebAssembly-based background removal

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready for static hosting.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to a GitHub repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Vercel will auto-detect Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Click "Deploy"

### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)

2. Click "New Project"

3. Upload the `dist` folder (after running `npm run build`)

## How It Works

1. User uploads an image via drag-and-drop or file selection
2. Image is read as an ArrayBuffer
3. `@imgly/background-removal` processes the image using WebAssembly
4. A transparent PNG is generated
5. User can preview and download the result

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Size Recommendations

- Recommended: Images under 5MB for faster processing
- Maximum: 10MB+ (may take longer to process)

## License

MIT

## Troubleshooting

### Processing is taking too long

If background removal is taking more than 2 minutes:

1. **Check Browser Console** - Open Developer Tools (F12) and check the Console tab for error messages
2. **Image Size** - The app automatically resizes images to 1024px max for faster processing. Very large original images may still take time
3. **First Time Use** - The first time you use the app, it downloads AI models (~10-20MB). This is a one-time download that may take 1-2 minutes depending on your connection
4. **Network Issues** - Ensure you have a stable internet connection for the initial model download
5. **Browser Compatibility** - Make sure you're using a modern browser (Chrome, Firefox, Safari, Edge)

### Common Issues

- **"Processing timeout"** - Try a smaller image or check your internet connection
- **"Failed to remove background"** - The image might be too complex or have issues. Try a different image with a clear subject
- **Stuck at 60-70%** - This usually means the AI models are downloading. Wait a bit longer on first use

## Notes

- All processing happens in the browser - no data is sent to any server
- Images are automatically resized to 1024px max for optimal performance
- The first load downloads WebAssembly models (~10-20MB) - this is cached for future use
- Processing typically takes 10-30 seconds after models are loaded
