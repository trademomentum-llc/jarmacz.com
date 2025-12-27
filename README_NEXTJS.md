# jarmacz.com - Next.js Serverless Site

This site has been migrated to **Next.js 16** with React 19 and TypeScript, configured for serverless deployment on Vercel.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
jarmacz.com/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── frameworks/       # Frameworks page
│   │   ├── projects/         # Projects page
│   │   └── services/         # Services page
│   ├── components/           # React components
│   │   ├── Navigation.tsx    # Navigation component
│   │   ├── NeuralCanvas.tsx  # Canvas animation
│   │   └── AnimatedCounter.tsx # Counter animation
│   └── styles/               # CSS files (copied from styles/)
├── public/                   # Static assets
│   ├── images/              # Images
│   └── docs/                # PDF documents
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Vercel deployment config
```

## Features

- ✅ **Serverless Architecture**: Deploy to Vercel with zero configuration
- ✅ **React 19**: Latest React features and performance
- ✅ **TypeScript**: Type-safe development
- ✅ **App Router**: Modern Next.js routing
- ✅ **Component-Based**: Reusable React components
- ✅ **CSS Support**: Existing CSS files work unchanged
- ✅ **Image Optimization**: Next.js Image component
- ✅ **Client Components**: Interactive animations with React hooks

## Deployment

### Deploy to Vercel

1. **Connect Repository**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Or use Vercel Dashboard**:
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Auto-deploy on push

### Environment Variables

No environment variables required for basic deployment.

## Development

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

### Building

```bash
npm run build
npm start
```

## Migration Notes

- HTML pages converted to React components
- JavaScript animations converted to React hooks
- Navigation uses Next.js Link component
- Images use Next.js Image component
- CSS files remain in `src/styles/` directory
- Static assets in `public/` directory

## Key Components

### Navigation
- Client-side component with mobile menu
- Smooth scrolling support
- Active state management

### NeuralCanvas
- Canvas-based particle animation
- Responsive to window resize
- Uses React hooks for lifecycle

### AnimatedCounter
- Intersection Observer API
- Animated number counting
- Performance optimized

## Next Steps

1. Migrate remaining pages (neurodivergent-ai, ihep, jess, dipg, mission-valley)
2. Add API routes for contact form (if needed)
3. Optimize images
4. Add metadata for SEO
5. Configure analytics

