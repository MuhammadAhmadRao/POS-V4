import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { ManageOLogo } from '../components/brand/ManageOLogo';
import { Button } from '../components/ui/Button';
import { authService, BusinessCategory } from '../services/authService';
import { Store, Scissors, Utensils, Eye, EyeOff, Check, AlertCircle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const SignupPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [category, setCategory] = useState<BusinessCategory>('retail');
  const [agreedTerms, setAgreedTerms] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  // Pre-fill email from query parameter if present
  useEffect(() => {
    const queryEmail = searchParams.get('email');
    if (queryEmail) {
      setEmail(queryEmail);
    }
  }, [searchParams]);

  // Password strength check
  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isPasswordValid = hasMinLength && hasLetter && hasNumber;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName || !businessName || !email || !password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!isPasswordValid) {
      setErrorMessage('Password must be at least 8 characters and include both letters and numbers.');
      return;
    }

    if (!agreedTerms) {
      setErrorMessage('Please accept the Merchant Agreement and Terms of Service to continue.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await authService.register({
        fullName,
        businessName,
        email,
        password,
        category,
      });

      if (res.success) {
        setSuccessModal(true);
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white font-sans">
      {/* Left Column: Editorial Brand Showcase */}
      <div className="lg:col-span-5 bg-[#090A0F] text-white p-8 md:p-14 flex flex-col justify-between relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 space-y-6">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </Link>

          <div>
            <ManageOLogo variant="dark" size={32} />
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mt-6">
              Start running your business with mastery.
            </h1>
            <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
              Create your unified workspace in under two minutes. Experience checkout speed, multi-branch inventory, and real-time margins.
            </p>
          </div>
        </div>

        {/* Middle Feature Highlights */}
        <div className="relative z-10 py-10 space-y-4">
          <div className="p-4 rounded-2xl bg-[#12141A] border border-neutral-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
              SELECTED CATEGORY WORKFLOW
            </span>
            <div className="flex items-center gap-3">
              {category === 'retail' && (
                <>
                  <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Retail &amp; Shop Package</h4>
                    <p className="text-xs text-neutral-400">Barcodes, multi-store stock &amp; variant matrices.</p>
                  </div>
                </>
              )}
              {category === 'salon' && (
                <>
                  <div className="p-2 rounded-lg bg-rose-950 text-rose-400">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Salon &amp; Beauty Package</h4>
                    <p className="text-xs text-neutral-400">Stylist calendars, client cards &amp; tip splitting.</p>
                  </div>
                </>
              )}
              {category === 'restaurant' && (
                <>
                  <div className="p-2 rounded-lg bg-amber-950 text-amber-400">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Restaurant Private Beta</h4>
                    <p className="text-xs text-neutral-400">Table floor plans &amp; Kitchen Display Systems.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Quote */}
        <div className="relative z-10 border-t border-neutral-800 pt-6">
          <p className="text-xs text-neutral-400 italic">
            &ldquo;ManageO replaced four different subscriptions for our 3 stores and unified all of our inventory into one clean dashboard.&rdquo;
          </p>
          <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>MARCUS T. • PROPRIETOR</span>
            <span className="text-emerald-400">● 14-DAY FREE TRIAL</span>
          </div>
        </div>
      </div>

      {/* Right Column: High-End Onboarding Form */}
      <div className="lg:col-span-7 p-8 md:p-14 lg:p-20 flex flex-col justify-center bg-white">
        <div className="max-w-xl mx-auto w-full space-y-8">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block">
              STEP 01 OF 02 • WORKSPACE SETUP
            </span>
            <h2 className="text-3xl font-black text-neutral-900 mt-1">
              Create your merchant account
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              No credit card required. Universal hardware compatibility.
            </p>
          </div>

          {errorMessage && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Category Selection */}
            <div>
              <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block mb-2.5">
                SELECT YOUR PRIMARY INDUSTRY *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setCategory('retail')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    category === 'retail'
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-600/20'
                      : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
                  }`}
                >
                  <Store className={`w-5 h-5 mb-2 ${category === 'retail' ? 'text-emerald-600' : 'text-neutral-500'}`} />
                  <span className="font-bold text-xs text-neutral-900 block">Retail &amp; Shop</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Boutiques, apparel, grocery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('salon')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    category === 'salon'
                      ? 'border-rose-600 bg-rose-50/60 ring-2 ring-rose-600/20'
                      : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
                  }`}
                >
                  <Scissors className={`w-5 h-5 mb-2 ${category === 'salon' ? 'text-rose-600' : 'text-neutral-500'}`} />
                  <span className="font-bold text-xs text-neutral-900 block">Salon &amp; Beauty</span>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Spas, barbers, hair salons</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCategory('restaurant')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    category === 'restaurant'
                      ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-600/20'
                      : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
                  }`}
                >
                  <Utensils className={`w-5 h-5 mb-2 ${category === 'restaurant' ? 'text-amber-600' : 'text-neutral-500'}`} />
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs text-neutral-900 block">Restaurant</span>
                    <span className="text-[8px] px-1 bg-amber-100 text-amber-800 font-mono font-bold rounded">BETA</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 block mt-0.5">Cafes, fast casual, bars</span>
                </button>
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block mb-1.5">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Elena Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block mb-1.5">
                  BUSINESS NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vance Flagship Studio"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-sans"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block mb-1.5">
                WORK EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                placeholder="elena@vancestudio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-sans"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
                  CREATE PASSWORD *
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 font-mono"
                >
                  {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showPassword ? 'HIDE' : 'SHOW'}</span>
                </button>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="At least 8 characters..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-sans"
              />

              {/* Password Requirements Checklist */}
              {password && (
                <div className="mt-2 flex items-center gap-4 text-[11px] font-mono text-neutral-500">
                  <span className={`flex items-center gap-1 ${hasMinLength ? 'text-emerald-600 font-bold' : ''}`}>
                    <Check className="w-3 h-3" /> 8+ Characters
                  </span>
                  <span className={`flex items-center gap-1 ${hasLetter ? 'text-emerald-600 font-bold' : ''}`}>
                    <Check className="w-3 h-3" /> Letters
                  </span>
                  <span className={`flex items-center gap-1 ${hasNumber ? 'text-emerald-600 font-bold' : ''}`}>
                    <Check className="w-3 h-3" /> Numbers
                  </span>
                </div>
              )}
            </div>

            {/* Terms Agreement Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-neutral-300"
              />
              <label htmlFor="terms" className="text-xs text-neutral-600 leading-relaxed cursor-pointer select-none">
                I agree to the <a href="#terms" className="text-blue-600 underline">Merchant Terms of Service</a> and acknowledge the <a href="#privacy" className="text-blue-600 underline">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isLoading}
              icon={isLoading ? <Sparkles className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
            >
              {isLoading ? 'Provisioning Workspace...' : 'Create ManageO Workspace'}
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="pt-4 border-t border-neutral-100 text-center text-xs text-neutral-600">
            <span>Already have a ManageO account? </span>
            <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800 underline">
              Sign In to Your Register
            </Link>
          </div>
        </div>
      </div>

      {/* Demo Success Modal */}
      {successModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-4xl p-8 max-w-md w-full shadow-2xl border border-neutral-200 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-200">
                DEMO ONBOARDING COMPLETE
              </span>
              <h3 className="text-2xl font-black text-neutral-900 mt-3">
                Workspace Provisioned!
              </h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Welcome, <strong>{fullName}</strong>. Your <strong>{category.toUpperCase()}</strong> operating database for <em>{businessName}</em> is ready.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left font-mono text-xs space-y-1.5 text-neutral-700">
              <p><strong>ACCOUNT:</strong> {email}</p>
              <p><strong>INDUSTRY:</strong> {category.toUpperCase()}</p>
              <p><strong>SECURITY:</strong> 256-Bit AES Encrypted</p>
              <p className="text-blue-600 font-bold pt-1">INTEGRATION READY: POS Redirect Configured</p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="dark"
                size="md"
                className="w-full"
                onClick={() => navigate('/')}
              >
                Return to Landing Page
              </Button>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => navigate('/login')}
              >
                Go to Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

