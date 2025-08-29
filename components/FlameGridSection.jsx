'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

const FlameGridSection = ({
  logoSrc = '/assets/Logos/Logo1.png',
  minCount = 40,
  cellSize = 140,
  maxShiftPx = 8,
  className = ''
}) => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const logosRef = useRef([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Get responsive cell size based on screen width
  const getResponsiveCellSize = useCallback(() => {
    if (typeof window === 'undefined') return cellSize;
    
    const width = window.innerWidth;
    if (width < 640) return Math.max(cellSize * 0.6, 80); // sm - smaller on mobile
    if (width < 1024) return cellSize * 0.8; // md - medium size on tablet
    return cellSize; // lg+ - full size on desktop
  }, [cellSize]);

  // Calculate grid layout
  const gridLayout = useMemo(() => {
    if (!dimensions.width || !dimensions.height) return { logos: [], rows: 0, cols: 0 };

    const responsiveCellSize = getResponsiveCellSize();
    const cols = Math.floor(dimensions.width / responsiveCellSize);
    const rows = Math.ceil(dimensions.height / responsiveCellSize);
    
    // Adjust for mobile - reduce count on smaller screens
    const maxLogos = dimensions.width < 640 ? 20 : dimensions.width < 1024 ? 30 : minCount;
    const totalCells = rows * cols;
    const logoCount = Math.min(Math.max(totalCells, maxLogos), totalCells);

    const logos = [];
    let count = 0;

    for (let row = 0; row < rows && count < logoCount; row++) {
      const isOffsetRow = row % 2 === 1;
      const rowCols = isOffsetRow ? cols - 1 : cols;
      const offsetX = isOffsetRow ? responsiveCellSize * 0.5 : 0;

      for (let col = 0; col < rowCols && count < logoCount; col++) {
        const x = offsetX + col * responsiveCellSize + responsiveCellSize / 2;
        const y = row * responsiveCellSize + responsiveCellSize / 2;
        
        logos.push({
          id: count,
          baseX: x,
          baseY: y,
          currentX: x,
          currentY: y,
          rotation: 0,
          size: responsiveCellSize * 0.75 // Logo takes 75% of cell
        });
        count++;
      }
    }

    return { logos, rows, cols, cellSize: responsiveCellSize };
  }, [dimensions, minCount, getResponsiveCellSize]);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setDimensions({
      width: rect.width,
      height: rect.height
    });
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeObserver.timeoutId);
      resizeObserver.timeoutId = setTimeout(handleResize, 100);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      handleResize(); // Initial sizing
    }

    return () => {
      resizeObserver.disconnect();
      clearTimeout(resizeObserver.timeoutId);
    };
  }, [handleResize]);

  // Animation loop
  const updateLogos = useCallback(() => {
    if (!isHovering || prefersReducedMotion || !containerRef.current) {
      // Keep current rotation, only reset translation
      gridLayout.logos.forEach((logo, index) => {
        const logoEl = logosRef.current[index];
        if (logoEl) {
          // Extract current rotation from transform
          const currentTransform = logoEl.style.transform;
          const rotateMatch = currentTransform.match(/rotate\(([^)]+)\)/);
          const currentRotation = rotateMatch ? rotateMatch[1] : '0deg';
          logoEl.style.transform = `translate(-50%, -50%) rotate(${currentRotation}) translate(0px, 0px)`;
        }
      });
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeMouseX = mousePos.x - containerRect.left;
    const relativeMouseY = mousePos.y - containerRect.top;

    gridLayout.logos.forEach((logo, index) => {
      const logoEl = logosRef.current[index];
      if (!logoEl) return;

      // Calculate angle from logo center to cursor
      const deltaX = relativeMouseX - logo.baseX;
      const deltaY = relativeMouseY - logo.baseY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Rotation: top of logo points to cursor
      const angle = Math.atan2(deltaY, deltaX) + Math.PI / 2; // +π/2 to point top towards cursor
      const rotation = angle * (180 / Math.PI);

      // Translation: nudge toward cursor (max 8px)
      const normalizedDx = distance > 0 ? deltaX / distance : 0;
      const normalizedDy = distance > 0 ? deltaY / distance : 0;
      const shiftX = normalizedDx * Math.min(maxShiftPx, distance * 0.1);
      const shiftY = normalizedDy * Math.min(maxShiftPx, distance * 0.1);

      // Apply transform with GPU acceleration
      logoEl.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) translate(${shiftX}px, ${shiftY}px)`;
    });
  }, [isHovering, mousePos, gridLayout.logos, maxShiftPx, prefersReducedMotion]);

  // RAF loop
  useEffect(() => {
    const animate = () => {
      updateLogos();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateLogos]);

  // Mouse event handlers
  const handlePointerMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <section 
      className={`relative w-full min-h-[60vh] lg:min-h-[75vh] bg-black overflow-hidden pb-16 ${className}`}
      aria-hidden="true"
    >
      {/* Visually hidden heading for accessibility */}
      <h2 className="sr-only">Solyn flame field (interactive)</h2>
      
      {/* Optional subtle vignette for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
      
      {/* Flame grid container */}
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {gridLayout.logos.map((logo, index) => (
          <div
            key={logo.id}
            ref={(el) => {
              if (el) logosRef.current[index] = el;
            }}
            className="absolute will-change-transform transition-transform duration-300 ease-out"
            style={{
              left: `${logo.baseX}px`,
              top: `${logo.baseY}px`,
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img
              src={logoSrc}
              alt=""
              className="w-full h-full object-contain select-none pointer-events-none"
              style={{
                filter: 'brightness(1.1) contrast(1.05)', // Subtle enhancement
              }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlameGridSection;
