# FlexLayers Theme Skeleton for SvelteKit

[![FlexLayers](https://flexlayers.com/badge.svg)](https://flexlayers.com)

This is the official skeleton repository for creating FlexLayers themes for SvelteKit. It provides a standardized foundation that all FlexLayers themes build upon, ensuring consistency, quality, and best practices across our theme ecosystem.

## Purpose

This skeleton serves as the starting point for theme developers who want to:

- Create new FlexLayers themes
- Contribute to the FlexLayers theme collection
- Understand the structure and standards we use

## What's Included

- ⚡ Optimized SvelteKit project configuration
- 🧪 Testing setup with Vitest and Testing Library
- 🔍 ESLint and Prettier configuration
- 📦 Essential package dependencies
- 🏗️ Standardized file structure
- 💻 Development workflow scripts

## Svelte Version

This skeleton uses **Svelte 4** and not the newer Svelte 5. This is a deliberate choice:

- Our AI-powered workflow for theme creation and customization is optimized for Svelte 4
- Current LLM support for Svelte 5's runes and newer features is still maturing
- This ensures maximum compatibility and stability across our theme ecosystem

We plan to update to Svelte 5 in the future as LLM capabilities evolve and support for the newer syntax becomes more robust.

## Getting Started

### Creating a New Theme

```bash
# Clone this skeleton
git clone https://github.com/flexlayers/theme-skeleton.git my-theme

# Navigate to the project directory
cd my-theme

# Install dependencies
npm install

# Start development
npm run dev
```

### Structure

```
├── src
│   ├── lib            # Shared components and utilities
│   └── routes         # SvelteKit routes and page components
├── eslint.config.js   # ESLint configuration
├── package.json       # Project dependencies
├── svelte.config.js   # SvelteKit configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Theme Development Guidelines

When building a theme with this skeleton:

1. Keep components modular and reusable
2. Follow the established naming conventions
3. Write tests for all components
4. Ensure responsive behavior across all devices
5. Maintain accessibility standards

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:unit
```

## About FlexLayers

FlexLayers provides high-quality, professionally designed SvelteKit themes for developers and agencies. Our mission is to empower the SvelteKit community with beautiful, functional, and customizable themes.

Visit [FlexLayers.com](https://flexlayers.com) to learn more about our theme collection and upcoming AI-powered customization tools.

## License

This skeleton is licensed under the [MIT License](LICENSE.md).
