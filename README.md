# Next.js 15 Starter Template

A modern, production-ready Next.js starter template with essential configurations and best practices. This template is designed to accelerate development with a robust foundation that includes TypeScript, Tailwind CSS v4, ESLint, Prettier, and Husky for git hooks.

## ✨ Features

- **⚡ Next.js 15** - Latest version with App Router
- **📘 TypeScript** - Static type checking
- **🎨 Tailwind CSS v4** - Latest utility-first CSS framework with new Oxide engine
- **🔧 ESLint & Prettier** - Code linting and formatting with custom rules
- **🐕 Husky** - Git hooks for code quality enforcement
- **📦 Yarn** - Fast, reliable package manager
- **🎯 Absolute Imports** - Clean import paths with `@/` alias
- **🌓 Dark Mode Support** - Built-in dark/light mode with Tailwind
- **🚀 Optimized Fonts** - Geist font family from Vercel
- **🔍 Type-Safe** - Custom utility types and strict TypeScript config

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 with PostCSS
- **Code Quality:** ESLint, Prettier, lint-staged
- **Git Hooks:** Husky with pre-commit and pre-push validation
- **Package Manager:** Yarn (v1.22.18+)
- **Node.js:** v20.18.0+

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v20.18.0 or higher
- **Yarn** v1.22.18 or higher (npm is disabled in this project)

## 🚀 Getting Started

### 1. Clone or use this template

```bash
# Clone the repository
git clone https://github.com/no-ki/nextjs-starter.git
cd nextjs-starter
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Start editing

- Edit `src/app/page.tsx` to modify the main page
- Add new pages in the `src/app` directory
- Modify global styles in `src/app/globals.css`

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build production application |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint with auto-fix |
| `yarn format` | Format code with Prettier |

## 🎨 Styling with Tailwind CSS v4

This template uses Tailwind CSS v4, which features significant improvements:

- **Zero Configuration** - No traditional config file needed
- **Oxide Engine** - 10x faster compilation
- **Native CSS Integration** - Direct `@import 'tailwindcss'` in CSS
- **Automatic Code Detection** - Scans all files automatically

### Custom Theme Configuration

Custom theming is done directly in the CSS file (`src/app/globals.css`):

```css
@theme {
  /* Font families */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Custom colors */
  --color-custom-black: #000000;
  --color-custom-white: #ffffff;
}
```

### Dark Mode

Dark mode is enabled by default and works automatically with system preferences:

```tsx
// Automatically respects system dark/light mode
<div className="bg-white dark:bg-black text-black dark:text-white">
  Content adapts to theme
</div>
```

## 📁 Project Structure

```
nextjs-starter/
├── .husky/                 # Git hooks configuration
│   ├── pre-commit         # Runs lint-staged before commits
│   └── pre-push           # Runs build before pushing
├── public/                # Static assets
│   ├── favicon.ico        # Website favicon
│   └── images/            # Image assets
│       ├── file.svg       # File icon
│       ├── globe.svg      # Globe icon
│       ├── next.svg       # Next.js logo
│       ├── vercel.svg     # Vercel logo
│       └── window.svg     # Window icon
├── src/
│   └── app/              # App Router pages and layouts
│       ├── globals.css   # Global styles with Tailwind
│       ├── layout.tsx    # Root layout component
│       └── page.tsx      # Homepage component
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore patterns
├── .npmrc                # npm configuration
├── .nvmrc                # Node.js version specification
├── .prettierignore       # Prettier ignore patterns
├── .prettierrc           # Prettier configuration
├── global.d.ts           # Global TypeScript declarations
├── next.config.ts        # Next.js configuration
├── next-env.d.ts         # Next.js TypeScript declarations
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration for Tailwind
├── tsconfig.json         # TypeScript configuration
└── yarn.lock             # Yarn dependency lock file
```

## ⚙️ Configuration Details

### TypeScript Configuration

- Strict mode enabled for better type safety
- Path aliases configured (`@/` points to `src/`)
- Modern ES2020 target with latest features

### ESLint Setup

Custom ESLint configuration includes:
- Next.js recommended rules
- TypeScript integration
- Prettier integration
- TanStack Query rules (for future API integration)

### Prettier Configuration

Opinionated formatting with:
- 2-space indentation
- Single quotes for JavaScript
- Trailing commas
- Automatic import organization
- Tailwind class sorting

### Git Hooks

**Pre-commit hook:**
- Runs `lint-staged` to format and lint staged files
- Ensures code quality before commits

**Pre-push hook:**
- Runs `yarn build` to ensure the project builds successfully
- Prevents pushing broken code

## 🚀 Deployment

This template is optimized for deployment on Vercel:

### Deploy on Vercel

1. Push your code to a Git repository
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The template works with any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- AWS
- Google Cloud

Make sure to:
1. Set Node.js version to 20.18.0+
2. Use `yarn build` as the build command
3. Set `yarn start` as the start command

## 🔧 Customization

### Adding New Dependencies

```bash
# Add runtime dependency
yarn add package-name

# Add development dependency
yarn add -D package-name
```

### Environment Variables

Create a `.env.local` file for environment variables:

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

### Custom Components

Create reusable components in `src/components/`:

```tsx
// src/components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === 'primary'
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-900'
      }`}
    >
      {children}
    </button>
  );
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### Tailwind CSS Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Beta](https://tailwindcss.com/blog/tailwindcss-v4-beta)
- [Tailwind UI Components](https://tailwindui.com)

### TypeScript Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [TypeScript with Next.js](https://nextjs.org/docs/basic-features/typescript)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org) for the amazing framework
- [Tailwind Labs](https://tailwindlabs.com) for the utility-first CSS framework
- [Vercel](https://vercel.com) for the Geist font family and deployment platform
