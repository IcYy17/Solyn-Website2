# Solyn Landing Page with React FlameGridSection

This is the enhanced version of the Solyn landing page featuring an interactive React component called **FlameGridSection**.

## 🔥 FlameGridSection Features

- **Interactive Grid**: 50+ flame logos in a staggered, offset layout (like US flag stars)
- **Cursor Tracking**: Each logo rotates to point its top toward the cursor and nudges closer
- **Smooth Animations**: 60fps performance with RAF batching and GPU transforms
- **Responsive Design**: Adapts to different screen sizes with appropriate logo counts
- **Accessibility**: Respects `prefers-reduced-motion` and includes screen reader considerations
- **Linear-style Aesthetic**: Minimal, premium feel with subtle interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Component API

The `FlameGridSection` component accepts these props:

```jsx
<FlameGridSection
  logoSrc="/path/to/flame-logo.png"  // Path to flame logo
  minCount={60}                      // Minimum logos to render
  cellSize={90}                      // Base cell size in pixels
  maxShiftPx={8}                     // Max pixels to shift toward cursor
  className=""                       // Optional CSS classes
/>
```

## 🏗️ Technical Implementation

### Performance Optimizations
- **RequestAnimationFrame batching** for smooth 60fps animations
- **GPU-accelerated transforms** using `transform` property only
- **Debounced resize handling** to prevent layout thrashing
- **Efficient re-renders** with React hooks and refs

### Layout Algorithm
- **Staggered grid**: Every other row offset by half a cell width
- **Responsive scaling**: Cell size adapts to screen breakpoints
- **Dynamic logo count**: Fewer logos on mobile, more on desktop
- **Absolute positioning**: For precise control and performance

### Interaction Details
- **Cursor tracking**: Calculates angle from each logo center to cursor
- **Rotation logic**: Top of logo always points toward cursor
- **Translation logic**: Each logo nudges up to 8px toward cursor
- **Smooth easing**: Returns to neutral position when cursor leaves

### Accessibility
- **Reduced motion support**: Disables animations when user prefers reduced motion
- **Screen reader friendly**: Uses `aria-hidden="true"` since it's decorative
- **Keyboard navigation**: No focus traps or interactive elements within the grid

## 🎯 Integration

The FlameGridSection is integrated into the landing page between the Value Propositions and App Showcase sections, creating a delightful interactive moment that breaks up the content flow.

## 📱 Responsive Behavior

- **Desktop (1024px+)**: 60+ logos, 110px cell size
- **Tablet (640-1024px)**: 50+ logos, 90px cell size  
- **Mobile (<640px)**: 40+ logos, 60px cell size

## 🎨 Styling

The component uses Tailwind CSS with custom utilities:
- Black background (`bg-black`) for seamless logo blending
- Subtle radial gradient vignette for depth
- GPU-optimized transforms for smooth interactions

## 🔧 Customization

You can easily customize the FlameGridSection by:
- Adjusting the `cellSize` for different logo densities
- Changing `maxShiftPx` for more/less cursor attraction
- Modifying the `minCount` for different logo quantities
- Adding custom CSS classes via the `className` prop

## 🌟 Demo

The FlameGridSection creates a mesmerizing effect where dozens of flame logos track your cursor movement, creating a dynamic, living background that feels both playful and premium.
