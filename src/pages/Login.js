import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Incorrect password');
      } else if (error.code === 'auth/invalid-credential') {
        toast.error('Invalid email or password');
      } else {
        toast.error('Failed to login. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success('Welcome!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      toast.error('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50/30 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo & Header */}
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/" className="inline-block mb-4 sm:mb-6">
          
          </Link>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-sm sm:text-base text-gray-600">Sign in to continue to your dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 mb-4 sm:mb-6">
          {/* Google Sign In - Featured */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-6 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm sm:text-base">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative my-5 sm:my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 sm:pl-12 pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="Enter your email"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <Link 
                  to="/reset-password" 
                  className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 sm:pl-12 pr-11 sm:pr-12 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="Enter your password"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
              Create account
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center gap-1">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
