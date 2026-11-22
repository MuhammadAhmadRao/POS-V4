# ManageO Motion Design Library & Kinetic Specification

**Document Ref:** `MANAGEO-DOC-011`  
**Version:** 3.0 (Phase 04 Final Kinetic Specification)  
**Author:** Motion Design & Frontend Engineering Group  
**Project:** MANAGEO Multi-Industry POS Platform  
**Target Engine:** Framer Motion (`framer-motion`) + CSS Hardware-Accelerated Keyframes  
**Local Preview:** [http://localhost:3000/](http://localhost:3000/)  

---

## 1. Kinetic Philosophy & The Rhythm of Commerce

Motion in ManageO mirrors the physical rhythm of real-world retail and hospitality:
* **The Tap:** Instantaneous feedback (sub-100ms spring response).
* **The Scan:** Clean, focused optical laser line.
* **The Print:** Smooth physical extrusion of paper from the terminal slot.
* **The Float:** Organic, subtle breathing motion for physical commerce chits.
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
* **Trigger:** Scroll position reaches `scrollY >= 220px`.
* **Transform:**
  * Initial State: `y: -50px, opacity: 0, scale: 0.95`
  * Animate State: `y: 0px, opacity: 1, scale: 1.0`
  * Exit State: `y: -50px, opacity: 0, scale: 0.95`
* **Physics:** `MOTION_PRESETS.docking`
* **Backdrop Blur:** `backdrop-filter: blur(16px)` initiates on mount.

### 3.2. Gentle Artifact Floating Physics
* **Component:** Hero centerpiece thermal receipt card and retail hangtags.
* **CSS Keyframe:**
  ```css
  @keyframes gentleFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-7px) rotate(0.4deg); }
  }

  @keyframes gentleFloatDelayed {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-9px) rotate(-0.5deg); }
  }

  .animate-float {
    animation: gentleFloat 5.5s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: gentleFloatDelayed 6.5s ease-in-out 1.2s infinite;
  }
  ```

### 3.3. Barcode Laser Sweep Animation
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

### 3.4. Transaction Pulse Node Glow
* **Component:** Signature "O" pulse node in active POS register header and logo.
* **Animation:**
  ```css
  @keyframes ringPulse {
    0% { transform: scale(0.95); opacity: 0.8; }
    50% { transform: scale(1.05); opacity: 0.3; }
    100% { transform: scale(0.95); opacity: 0.8; }
  }
  .animate-pulse-subtle {
    animation: ringPulse 3s ease-in-out infinite;
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
3. Continuous looping animations (laser sweep, gentle float, pulse glow) are paused.
