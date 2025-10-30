# Branchify

A modern React application built with Vite for visualizing and managing hierarchical data structures. This project features a sleek UI with dark mode support, animated components, and efficient JSON data handling using React Flow.

## Features

- 🌗 Dark/Light mode toggle with Radix UI
- 🎨 Advanced animations using Framer Motion
- 📊 Interactive flow diagrams with @xyflow/react
- ⚡ Fast performance with Vite
- 🎭 Smooth Lottie animations
- 📱 Responsive design with Tailwind CSS
- 🎯 Modern React patterns (React 19)
- 🎨 Component variations with class-variance-authority
- 🔧 Type-safe development environment

## Tech Stack

### Core

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Routing:** React Router 7

### UI & Styling

- **CSS Framework:** Tailwind CSS 4
- **UI Components:**
  - Radix UI (Dropdown Menu, Slot)
  - Custom components with modern design
- **Styling Utilities:**
  - class-variance-authority
  - clsx
  - tailwind-merge
  - tw-animate-css

### Animations & Visualization

- **Flow Diagrams:** @xyflow/react
- **Animations:**
  - Framer Motion
  - @lottiefiles/dotlottie-react
- **Icons:** Lucide React

### Development Tools

- **Linting:** ESLint 9
  - eslint-plugin-react-hooks
  - eslint-plugin-react-refresh
- **TypeScript Support:** React 19 types included

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/santwan/branchify.git
cd branchify
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

### Environment Setup

Make sure your environment is set up with:

- Latest version of Node.js for optimal compatibility with React 19
- A modern code editor (VS Code recommended) with ESLint integration
- Git for version control

## Project Structure

```
branchify/
├── public/
├── src/
│   ├── assets/          # Static assets and animations
│   ├── components/      # Reusable UI components
│   │   ├── global/      # Global components like Navbar
│   │   ├── home/        # Home page components
│   │   └── ui/          # UI utility components
│   ├── layouts/         # Layout components
│   ├── pages/          # Page components
│   ├── routes/         # Route configurations
│   └── utils/          # Utility functions
├── index.html
└── vite.config.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
