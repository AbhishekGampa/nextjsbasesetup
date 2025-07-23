# Next.js Base Setup 🚀

A production-ready Next.js starter template with TypeScript, Tailwind CSS, and modern development tools. This repository serves as a comprehensive foundation for building scalable web applications with Next.js 15.

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com/)

## 🌟 Features

- ⚡ **Next.js 15** with App Router (latest stable version)
- 🔷 **TypeScript** for enhanced type safety and developer experience
- 🎨 **Tailwind CSS** for rapid UI development with utility-first approach
- 📏 **ESLint** configured with Next.js recommended rules
- 🖼️ **Optimized Image Component** with automatic optimization
- 🌓 **Dark/Light mode** support with system preference detection
- 📱 **Responsive design** with mobile-first approach
- 🎯 **Import aliases** (`@/*`) for clean import statements
- ⚡ **Hot reload** for instant development feedback
- 🚀 **Vercel deployment ready** with zero configuration

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18.17.0 or higher
- **npm**: Version 9.x or higher
- **Git**: Latest version

Check your versions:
```
node -v
npm -v
git --version
```

### Installation Steps

1. **Clone the Repository**
   ```
   git clone https://github.com/GampaAbhishek/nextjsbasesetup.git
   cd nextjsbasesetup
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Start Development Server**
   ```
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000` 🎉

## 📁 Project Structure

```
nextjsbasesetup/
├── src/
│   └── app/
│       ├── globals.css          # Global styles and Tailwind imports
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Home page component
├── public/
│   ├── next.svg                 # Next.js logo
│   ├── vercel.svg               # Vercel logo
│   ├── file.svg                 # File icon
│   ├── window.svg               # Window icon
│   └── globe.svg                # Globe icon
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS configuration
├── .eslintrc.json              # ESLint configuration
└── README.md                   # This file
```

## 🎯 Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm run dev` | Start development server | Development |
| `npm run build` | Create production build | Before deployment |
| `npm run start` | Start production server | After build |
| `npm run lint` | Run ESLint | Code quality check |

## ⚙️ Configuration

### Dependencies Overview

**Production Dependencies:**
```
{
  "next": "^15.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

**Development Dependencies:**
```
{
  "@types/node": "^20.0.0",
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0",
  "autoprefixer": "^10.0.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^15.0.0",
  "postcss": "^8.0.0",
  "tailwindcss": "^3.0.0",
  "typescript": "^5.0.0"
}
```

### Key Configuration Files

**Tailwind CSS (`tailwind.config.js`):**
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
```

**TypeScript (`tsconfig.json`):**
```
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{"name": "next"}],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🚀 Vercel Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `nextjsbasesetup` repository
   - Click "Deploy"

3. **Automatic Updates:**
   - Every push to `main` branch will trigger automatic deployment
   - Preview deployments for pull requests

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```
   vercel login
   ```

3. **Deploy:**
   ```
   vercel
   ```

4. **Deploy to Production:**
   ```
   vercel --prod
   ```

### Vercel Configuration

Create `vercel.json` (optional) for advanced configuration:
```
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### Environment Variables on Vercel

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add your environment variables:
   - `NODE_ENV=production`
   - Add any API keys or custom variables

## 🎨 Customization

### Adding Custom Components

Create a components directory:
```
mkdir src/components
mkdir src/components/ui
```

Example component (`src/components/ui/Button.tsx`):
```
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Updating Metadata

Edit `src/app/layout.tsx`:
```
export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
  keywords: ['nextjs', 'typescript', 'tailwind'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
}
```

### Adding Pages

Create new pages in the `src/app` directory:
```
mkdir src/app/about
touch src/app/about/page.tsx
```

Example about page:
```
export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">This is the about page.</p>
    </div>
  );
}
```

## 📚 Development Workflow

### Best Practices

1. **Code Organization:**
   - Keep components in `src/components/`
   - Use TypeScript interfaces for props
   - Follow consistent naming conventions

2. **Styling:**
   - Use Tailwind utility classes
   - Create custom components for reusable styles
   - Maintain responsive design principles

3. **Performance:**
   - Use Next.js Image component for images
   - Implement proper loading states
   - Optimize bundle size with tree shaking

### Git Workflow

```
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/new-feature

# Merge to main triggers Vercel deployment
```

## 🛠️ Troubleshooting

### Common Issues

**Build Errors:**
```
# Clear Next.js cache
rm -rf .next
npm run build
```

**TypeScript Errors:**
```
# Check TypeScript configuration
npx tsc --noEmit
```

**Styling Issues:**
```
# Rebuild Tailwind CSS
npm run dev
```

### Vercel Deployment Issues

1. **Build fails:** Check build logs in Vercel dashboard
2. **Environment variables:** Ensure all required env vars are set
3. **Domain issues:** Configure custom domains in Vercel settings

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### 🎯 Quick Commands Reference

```
# Setup
git clone https://github.com/GampaAbhishek/nextjsbasesetup.git
cd nextjsbasesetup
npm install
npm run dev

# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Check code quality

# Deployment
git push origin main # Auto-deploy to Vercel
vercel --prod        # Manual deployment
```

**Live Demo:** [Your Vercel URL will appear here after deployment]

**Repository:** https://github.com/GampaAbhishek/nextjsbasesetup
```
