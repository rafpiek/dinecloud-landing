# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (Next.js 15)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 landing page for DineCloud, a restaurant ordering app. The project uses the App Router with TypeScript and is configured for Polish market.

### Key Features
- **Deep Linking**: `/dl/[code]` route handles app installation and deep links with Apple App Clip support
- **Multi-language Support**: Primarily Polish (`lang="pl"` in layout)
- **App Store Integration**: Automatic platform detection for iOS/Android app downloads
- **QR Code Generation**: Uses `next-qrcode` for dynamic QR code creation

### Project Structure
- `src/app/` - Next.js App Router pages
  - `dl/[code]/` - Deep link handling for app installation
  - Contact, download, privacy, terms pages
- `src/components/` - Reusable React components (Header, Hero, Landing sections)
- `src/assets/` - Static assets (fonts, images, SVG icons)
- `src/lib/` - Utilities and constants (app store URLs, device detection)
- `src/styles/` - CSS files (includes legacy styles and Tailwind)

### Styling
- **Tailwind CSS** with custom theme extensions (primaryDark, lightGreen2 colors)
- **Custom fonts**: Inter (primary), Geist Sans/Mono
- **Legacy CSS**: Maintains old styles for compatibility

### App Integration
- Apple App Clip configuration in `next.config.ts`
- Apple App Site Association and Android Asset Links in `public/.well-known/`
- Platform-specific download URLs in `lib/constants.ts`

### Deployment
- Vercel deployment with custom headers for Apple App Clips
- Special handling for `.well-known/` files