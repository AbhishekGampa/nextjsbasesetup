import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        
        {/* Logo and Welcome */}
        <div className="text-center sm:text-left">
          <Image
            className="dark:invert mx-auto sm:mx-0"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-800 dark:text-gray-200">
            Welcome to Next.js Base Setup! 🚀
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A production-ready starter template with TypeScript, Tailwind CSS, and modern tooling
          </p>
        </div>

        {/* Quick Start Instructions */}
        <div className="w-full bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            🎯 Quick Start Guide
          </h2>
          <ol className="font-mono list-inside list-decimal text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li className="tracking-[-.01em]">
              Edit{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                src/app/page.tsx
              </code>{" "}
              to customize this page
            </li>
            <li className="tracking-[-.01em]">
              Add components in{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                src/components/
              </code>{" "}
              directory
            </li>
            <li className="tracking-[-.01em]">
              Create new pages in{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                src/app/
              </code>{" "}
              using App Router
            </li>
            <li className="tracking-[-.01em]">
              Save changes and see instant updates with hot reload
            </li>
          </ol>
        </div>

        {/* Features Grid */}
        <div className="w-full">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            ✨ What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200">⚡ Next.js 15</h3>
              <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
                App Router, Server Components, and optimizations
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200">🔷 TypeScript</h3>
              <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                Type safety with strict configuration
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-800 dark:text-purple-200">🎨 Tailwind CSS</h3>
              <p className="text-sm text-purple-600 dark:text-purple-300 mt-1">
                Utility-first CSS with custom configurations
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-800 dark:text-orange-200">📏 ESLint</h3>
              <p className="text-sm text-orange-600 dark:text-orange-300 mt-1">
                Code quality and consistency enforcement
              </p>
            </div>
          </div>
        </div>

        {/* Development Commands */}
        <div className="w-full bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            🛠️ Development Commands
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="bg-black/[.05] dark:bg-white/[.06] p-3 rounded font-mono">
                <span className="text-green-600 dark:text-green-400">$</span> npm run dev
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Start development server</p>
            </div>
            <div>
              <div className="bg-black/[.05] dark:bg-white/[.06] p-3 rounded font-mono">
                <span className="text-green-600 dark:text-green-400">$</span> npm run build
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Build for production</p>
            </div>
            <div>
              <div className="bg-black/[.05] dark:bg-white/[.06] p-3 rounded font-mono">
                <span className="text-green-600 dark:text-green-400">$</span> npm run lint
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Check code quality</p>
            </div>
            <div>
              <div className="bg-black/[.05] dark:bg-white/[.06] p-3 rounded font-mono">
                <span className="text-green-600 dark:text-green-400">$</span> npm run start
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Start production server</p>
            </div>
          </div>
        </div>

        {/* Project Structure */}
        <div className="w-full bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            📁 Project Structure
          </h2>
          <pre className="text-sm text-gray-700 dark:text-gray-300 font-mono overflow-x-auto">
{`src/
├── app/
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # This page
├── components/         # Create reusable components here
└── lib/               # Utility functions

public/                # Static assets
├── next.svg
├── vercel.svg
└── ...`}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://github.com/GampaAbhishek/nextjsbasesetup"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>

        {/* Getting Started Tips */}
        <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            💡 Next Steps
          </h2>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Create your first component in <code className="bg-black/[.05] dark:bg-white/[.06] px-1 rounded">src/components/</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Add new pages using the App Router structure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Customize Tailwind colors in <code className="bg-black/[.05] dark:bg-white/[.06] px-1 rounded">tailwind.config.js</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Deploy to Vercel with automatic GitHub integration</span>
            </li>
          </ul>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn Next.js
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Tailwind Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          href="https://www.typescriptlang.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          TypeScript Docs
        </a>
      </footer>
    </div>
  );
}
