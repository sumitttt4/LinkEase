import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
import { Mail } from 'lucide-react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
      toast.success('Password reset email sent!');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        toast.error('No account found with this email');
      } else {
        toast.error('Failed to send reset email');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50/30 to-rose-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-6 sm:mb-8">
          <Link to="/" className="inline-block mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">LinkEase</h1>
          </Link>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Reset password</h2>
          <p className="text-sm sm:text-base text-gray-600">Enter your email to receive a reset link</p>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 mb-4 sm:mb-6">
          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 text-white py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    <span>Send Reset Link</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-orange-600" size={32} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Check your email</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We've sent a password reset link to <strong className="text-gray-900">{email}</strong>
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors inline-flex items-center gap-1">
              ← Back to login
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors inline-flex items-center gap-1">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
