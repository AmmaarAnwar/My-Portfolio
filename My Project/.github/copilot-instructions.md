# AI Coding Instructions for Modern Portfolio

## Architecture Overview

This is a **full-stack portfolio site** with two main parts:

1. **Frontend** (React + Vite): Single-page application with scroll-based navigation and 3D interactive components
   - Runs on port 4000 during development (`vite`)
   - Built with React 19, Framer Motion for animations, Three.js for 3D
   - Components in `src/components/` follow one-per-file pattern with section-specific layouts
   - 3D components in `src/components/3d/` using React Three Fiber (`@react-three/fiber`, `@react-three/drei`)

2. **Backend** (Express server): Minimal Node.js API
   - Runs on port 3000 (`node server.js` or npm run `start`/`server`)
   - **Single responsibility**: Persists contact form submissions to `contacts.json`
   - Handles CORS for frontend-backend communication
   - Uses ES modules (import/export)

**Data Flow**: Contact form (Hero/Contact component) → POST `/api/contact` → `contacts.json`

## Project Commands

- `npm run dev` – Start Vite dev server (port 4000, live reload enabled)
- `npm run build` – Production bundle to `dist/`
- `npm run server` / `npm start` – Run Express backend (port 3000)
- `npm run lint` – Run ESLint with React rules
- `npm run preview` – Preview production build locally

**Development workflow**: Run both `npm run dev` AND `npm run server` in separate terminals.

## Key Conventions & Patterns

### Component Structure
- **Section components** (About, Skills, Projects, Contact, etc.) are full-page sections with scroll IDs
- Each exports as default; import as `import About from './components/About'`
- Props follow **parent→child** pattern: Navbar receives `isMenuOpen, toggleMenu` from App
- Use `react-scroll` Link component for smooth navigation between sections with spy/smooth props

**Example section pattern** (See [Navbar.jsx](Navbar.jsx#L1)):
```jsx
import { Link } from "react-scroll";  // For navigation links
import { motion } from "framer-motion";  // For entrance animations

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }}>
      <Link to="home" smooth duration={500}>{/* links to section with id="home" */}</Link>
    </motion.header>
  );
};
export default Navbar;
```

### Styling (Tailwind)
- **Custom color palette**: `primary` (blue), `secondary` (teal), `accent` (orange) defined in [tailwind.config.js](tailwind.config.js)
- Use theme colors as `text-primary-600`, `bg-secondary-500`, etc. (NOT arbitrary values)
- Responsive classes: `md:`, `lg:` prefixes for tablet/desktop breakpoints
- Animation classes via Framer Motion (`motion.*` components) not Tailwind animations

### 3D Components
- **Location**: `src/components/3d/` (Avatar3D, FloatingCubes, SkillsSphere, FloatingShapes)
- **Pattern**: Use `useRef` + `useFrame` hook for animations (e.g., [SkillsSphere.jsx](SkillsSphere.jsx#L6))
- Imports: `@react-three/fiber` (Canvas, useFrame), `@react-three/drei` (Text, Sphere, etc.)
- All 3D components render inside a parent `<Canvas>` component (see Skills section usage)

### State & Effects
- Use `useState` for UI state (menu toggle, scroll detection); minimal component state
- `useEffect` cleanup pattern for event listeners (e.g., scroll handler with `removeEventListener`)
- No global state management (Redux/Context) – App.jsx manages top-level state

## Backend Considerations

### Contact API Endpoint
- **POST** `/api/contact` – Receives form data, adds timestamp, appends to `contacts.json`
- **Request body**: Any JSON object (no validation enforced – add if needed)
- **Response**: `{ success: true }` on success, `{ error: "..." }` on failure
- File persists as JSON array; contacts.json auto-created if missing

### Integration Notes
- Backend runs independently; frontend assumes backend on same origin or with CORS headers
- Contact form likely in [Contact.jsx](Contact.jsx) – ensure it POSTs to `/api/contact`
- CORS enabled for all origins via `cors()` middleware – restrict in production

## Development Tips

1. **Scroll section IDs**: Each section component needs a wrapping element with matching ID (e.g., `<section id="about">`) for react-scroll navigation
2. **Framer Motion**: Common pattern is `initial`, `animate` with `transition` – used for page entrance and component animations
3. **React Icons**: Imported as `import { FaBars, FaTimes } from "react-icons/fa"` – check Font Awesome docs for icon names
4. **Three.js Refs**: Always check if ref exists before modifying (`if (meshRef.current)`) in useFrame
5. **HMR**: Vite provides fast refresh; ensure components export defaults for proper reload

## File Organization

```
src/
├── App.jsx              (orchestrates sections + toggles menu state)
├── main.jsx             (React 19 entry point)
├── index.css            (global Tailwind imports)
├── components/          (section components)
│   └── 3d/              (Three.js components)
└── assets/              (images, fonts)
server.js               (Express backend)
tailwind.config.js      (color palette + content paths)
```

## ESLint Rules

- React 18.3+ rules enabled (react/jsx-runtime rules → no React import needed in JSX files)
- React Hooks rules enforced – will warn on missing dependencies in useEffect/useCallback
- ESLint config uses flat config format (eslint.config.js) – no .eslintrc
