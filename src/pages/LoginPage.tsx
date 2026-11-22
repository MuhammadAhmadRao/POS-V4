import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ManageOLogo } from '../components/brand/ManageOLogo';
import { Button } from '../components/ui/Button';
import { authService } from '../services/authService';
import { Eye, EyeOff, Lock, ArrowLeft, ArrowRight, AlertCircle, CheckCircle2, Sparkles, X } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Forgot Password Modal State
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSubmitted, setForgotSubmitted] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Please enter both your work email and password.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await authService.login({
        email,
        password,
        rememberMe,
      });

      if (res.success) {
        setLoginSuccess(true);
      } else {
        setErrorMessage(res.message);
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) return;

    await authService.requestPasswordReset(forgotEmail);
    setForgotSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Header */}
      <header className="p-6 md:p-8 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2">
          <ManageOLogo variant="primary" size={28} />
        </Link>

        <Link to="/" className="text-xs font-mono font-bold text-neutral-500 hover:text-neutral-900 flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO MARKETING SITE</span>
        </Link>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-4xl border border-neutral-200 shadow-xl p-8 md:p-10 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mb-1">
              <Lock className="w-5 h-5" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Sign in to ManageO
            </h1>
            <p className="text-xs text-neutral-500">
              Access your Point of Sale register and operations back-office.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs font-medium flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {loginSuccess && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 font-bold text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>DEMO AUTHENTICATION SUCCESSFUL</span>
              </div>
              <p className="text-[11px] font-mono leading-relaxed text-emerald-700">
                Session token verified. In production, this handoff automatically redirects into your cousin&apos;s ManageO POS application dashboard.
              </p>
              <Button
                variant="dark"
                size="sm"
                className="w-full mt-2"
                onClick={() => navigate('/')}
              >
                Return to Landing Page
              </Button>
            </div>
          )}

          {!loginSuccess && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block mb-1.5">
                  WORK EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@business.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-sans"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider block">
                    PASSWORD
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
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all font-sans"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-neutral-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span>Remember this register</span>
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setForgotModalOpen(true);
                    setForgotSubmitted(false);
                    setForgotEmail(email);
                  }}
                  className="font-bold text-blue-600 hover:text-blue-800 underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full mt-2"
                disabled={isLoading}
                icon={isLoading ? <Sparkles className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
              >
                {isLoading ? 'Verifying Terminal...' : 'Sign In to Register'}
              </Button>
            </form>
          )}

          {/* Quick Demo Credentials Tip */}
          <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-[11px] font-mono text-neutral-600 space-y-1">
            <span className="font-bold text-neutral-800 block uppercase">DEMO PREVIEW CREDENTIALS:</span>
            <p>Email: <code className="text-blue-700">demo@manageo.io</code></p>
            <p>Password: <code className="text-blue-700">DemoPass2026</code></p>
          </div>

          <div className="pt-4 border-t border-neutral-100 text-center text-xs text-neutral-600">
            <span>New merchant? </span>
            <Link to="/signup" className="font-bold text-blue-600 hover:text-blue-800 underline">
              Create a Free 14-Day Account
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Legal */}
      <footer className="p-6 text-center text-xs font-mono text-neutral-400">
        <span>ENCRYPTED 256-BIT CONNECTION • SECURE TOKENIZED CHECKOUT • © 2026 MANAGEO</span>
      </footer>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-neutral-200 space-y-5 relative">
            <button
              onClick={() => setForgotModalOpen(false)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!forgotSubmitted ? (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-neutral-900">
                  Reset your password
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Enter your registered work email address. We will dispatch a secure single-use recovery link to reset your register PIN and credentials.
                </p>

                <div>
                  <label className="text-[11px] font-mono font-bold text-neutral-600 uppercase block mb-1">
                    YOUR WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@business.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                  />
                </div>

                <Button type="submit" variant="primary" size="md" className="w-full">
                  Send Recovery Link
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Recovery Link Sent!</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  If an account exists for <strong>{forgotEmail}</strong>, instructions to reset your password have been dispatched.
                </p>
                <Button
                  variant="dark"
                  size="sm"
                  className="w-full"
                  onClick={() => setForgotModalOpen(false)}
                >
                  Return to Sign In
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
