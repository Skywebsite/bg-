# Setup Instructions

## Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
# Windows PowerShell
Copy-Item .env.example .env

# Linux/Mac
cp .env.example .env
```

4. Edit `server/.env` and add your API keys:
```env
PORT=3001
BYTEZ_API_KEY=your_bytez_api_key_here
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

## Frontend Setup

1. Install dependencies (if not already done):
```bash
npm install
```

2. Create `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3001
```

3. Start the frontend:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Running Both Together

**Option 1: Separate Terminals**
- Terminal 1: `cd server && npm run dev`
- Terminal 2: `npm run dev`

**Option 2: Install concurrently (optional)**
```bash
npm install --save-dev concurrently
npm run dev:all
```

## API Endpoints

### POST /api/generate-image
Generate image from text prompt.

**Request:**
```json
{
  "prompt": "A cat in a wizard hat"
}
```

**Response:**
```json
{
  "success": true,
  "imageUrl": "https://cdn.bytez.com/..."
}
```

### GET /api/health
Health check endpoint.

## Environment Variables

### Backend (server/.env)
- `PORT` - Server port (default: 3001)
- `BYTEZ_API_KEY` - Bytez API key for image generation

### Frontend (.env)
- `VITE_API_URL` - Backend API URL (default: http://localhost:3001)

## Security Notes

- Never commit `.env` files to git
- API keys should only be stored in `.env` files
- Use different API keys for development and production
- The backend handles all API calls to external services

