import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { SignupPage } from './pages/SignupPage';
import { LoginPage } from './pages/LoginPage';
import { BrandShowcase } from './components/brand/BrandShowcase';

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Main Marketing Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Secondary Merchant Experiences */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Brand System & Showcase Specification (Phase 02 Artifact) */}
        <Route path="/brand-showcase" element={<BrandShowcase />} />

        {/* Fallback to Landing Page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
