# ManageO Motion Design Library & Kinetic Specification

**Document Ref:** `MANAGEO-DOC-011`  
**Version:** 2.0 (Kinetic Specification)  
**Author:** Motion Design & Frontend Engineering Group  
**Project:** MANAGEO Multi-Industry POS Platform  
**Target Engine:** Framer Motion (`framer-motion`) + CSS Hardware-Accelerated Keyframes  

---

## 1. Kinetic Philosophy & The Rhythm of Commerce

Motion in ManageO mirrors the physical rhythm of real-world retail and hospitality:
* **The Tap:** Instantaneous feedback (sub-100ms spring response).
* **The Scan:** Clean, focused optical laser line.
* **The Print:** Smooth physical extrusion of paper from the terminal slot.
* **The Sync:** A subtle, reassuring pulse indicating data integrity between registers.

We eliminate purposeless floating decorations and focus entirely on **tactile feedback** and **spatial orientation**.

---

## 2. Standard Spring Physics Presets

```typescript
// src/styles/motion-tokens.ts
export const MOTION_PRESETS = {
  // 1. Snappy Micro-Interactions (Buttons, toggles, icon clicks)
  snappy: {
    type: "spring",
    stiffness: 450,
    damping: 30,
    mass: 0.8,
  },
  
  // 2. Smooth Floating Navigation Dock (Entrance & Docking)
  docking: {
    type: "spring",
    stiffness: 280,
    damping: 26,
    mass: 1.0,
  },
  
  // 3. Tactile Physical Artifacts (Receipt drop, Hangtag swing)
  tactile: {
    type: "spring",
    stiffness: 320,
    damping: 20,
    mass: 1.1,
  },
  
  // 4. Heavy Device Containers (iPad frame, POS terminal shift)
  heavy: {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 1.4,
  },
};
```

---

## 3. Core Component Motion Choreography

### 3.1. Floating Pill Navigation Dock Entrance
* **Trigger:** Scroll position reaches `scrollY >= 120px`.
* **Transform:**
  * Initial State: `y: -50px, opacity: 0, scale: 0.95`
  * Animate State: `y: 0px, opacity: 1, scale: 1.0`
  * Exit State: `y: -50px, opacity: 0, scale: 0.95`
* **Physics:** `MOTION_PRESETS.docking`
* **Backdrop Blur:** `backdrop-filter: blur(16px)` initiates on mount.

### 3.2. Barcode Laser Sweep Animation
* **Component:** Product hangtags and barcode scanning simulation.
* **CSS Keyframe:**
  ```css
  @keyframes barcodeLaser {
    0% { transform: translateY(0%); opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
  }
  .animate-laser {
    animation: barcodeLaser 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  ```

### 3.3. Transaction Pulse Node Glow
* **Component:** Signature "O" pulse node in active POS register header.
* **Animation:**
  ```css
  @keyframes pulseGlow {
    0% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(37, 99, 235, 0)); }
    50% { transform: scale(1.12); filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.6)); }
    100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(37, 99, 235, 0)); }
  }
  ```

---

## 4. Accessibility & Reduced Motion Handling

ManageO respects user preferences for reduced motion automatically:
```tsx
import { useReducedMotion } from 'framer-motion';

export const useAdaptiveMotion = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0.2 } : MOTION_PRESETS.snappy,
  };
};
```
When `prefers-reduced-motion: reduce` is active:
1. All positional translations (`y`, `x`, `scale`) are disabled.
2. Motion gracefully falls back to instant opacity cross-fades (`duration: 0.15s`).
3. Continuous looping animations (laser sweep, pulse glow) are paused.

