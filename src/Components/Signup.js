import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaApple, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!agreeToTerms) {
      setError('Please agree to the Terms & Conditions');
      toast.error('Please agree to the Terms & Conditions');
      return;
    }

    try {
      setLoading(true);
      setError('');

      // API call to the backend signup endpoint
      const response = await axios.post('https://alumini-b5yr.onrender.com/api/auth/signup', {
        firstName,
        lastName,
        email,
        password
      });

      // Store the token in localStorage
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userData', JSON.stringify({
        id: response.data._id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email
      }));

      // Show success toast
      toast.success('Account created successfully!');

      // Redirect to dashboard or homepage after successful signup
      navigate('/');

    } catch (err) {
      console.error('Signup error:', err);

      // Extract error message properly
      let errorMessage = 'An error occurred during signup';

      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      } else if (err.message) {
        errorMessage = err.message;
      }

      // Set error state and show toast
      setError(errorMessage);
      toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-700 p-4">
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated waves */}
        <div className="absolute left-0 bottom-0 w-full h-full overflow-hidden z-0">
          <motion.div
            className="absolute -left-32 bottom-16 w-96 h-96 bg-blue-600 opacity-40 rounded-full blur-3xl"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden z-0">
          <motion.div
            className="absolute -right-32 bottom-16 w-96 h-96 bg-purple-600 opacity-40 rounded-full blur-3xl"
            animate={{
              x: [0, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>

        {/* Card */}
        <div className="bg-blue-900/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 relative z-10 border border-blue-800/50">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-1">Create an Account</h2>
            <p className="text-blue-200 text-sm">
              Already Have an Account? <Link to="/login" className="text-blue-300 hover:text-blue-100 underline">Log in</Link>
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-500/30 border border-red-500/50 text-red-100 px-4 py-2 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 bg-blue-800/30 text-white placeholder-blue-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 border border-blue-700/50"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 bg-blue-800/30 text-white placeholder-blue-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 border border-blue-700/50"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-blue-800/30 text-white placeholder-blue-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 border border-blue-700/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-blue-800/30 text-white placeholder-blue-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 border border-blue-700/50 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded bg-blue-800/50 border-blue-600 text-blue-500 focus:ring-blue-500"
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-blue-200">
                  I agree to the <a href="#" className="text-blue-300 hover:text-blue-100">Terms & Conditions</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w - full ${`loading ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-500'`} text-white py-3 rounded-lg transition-all duration-200 font-medium flex items-center justify-center`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating account...
                  </>
                ) : (
                  'Create account'
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex-grow h-px bg-blue-700/50"></div>
            <div className="text-sm text-blue-300">Or register with</div>
            <div className="flex-grow h-px bg-blue-700/50"></div>
          </div>

          <div className="mt-5 flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
              aria-label="Sign up with Apple"
            >
              <FaApple size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
              aria-label="Sign up with Facebook"
            >
              <FaFacebook size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
              aria-label="Sign up with Google"
            >
              <FaGoogle size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
              aria-label="Sign up with X"
            >
              <SiX size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
              aria-label="Sign up with GitHub"
            >
              <FaGithub size={24} />
            </motion.button>
          </div>
        </div>
      </motion.div >
    </div >
  );
};

export default Signup;