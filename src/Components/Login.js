import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaApple, FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password, agreeToTerms });
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
                        <h2 className="text-2xl font-bold text-white mb-1">Login your Account</h2>
                        <p className="text-blue-200 text-sm">
                            Don't Have any Account? <Link to="/signup" className="text-blue-300 hover:text-blue-100 underline">Create new one</Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
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

                            <div className="flex items-center mb-10">
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
                            <Link to="/home" className=''>
                                <button
                                    type="submit"
                                    className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg transition-all duration-200 font-medium"
                                >
                                    Login
                                </button>
                            </Link>

                        </div>
                    </form>

                    <div className="mt-8 flex items-center justify-center space-x-4">
                        <div className="flex-grow h-px bg-blue-700/50"></div>
                        <div className="text-sm text-blue-300">Or continue with</div>
                        <div className="flex-grow h-px bg-blue-700/50"></div>
                    </div>

                    <div className="mt-5 flex justify-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
                            aria-label="Sign in with Apple"
                        >
                            <FaApple size={24} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
                            aria-label="Sign in with Facebook"
                        >
                            <FaFacebook size={24} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
                            aria-label="Sign in with Google"
                        >
                            <FaGoogle size={24} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
                            aria-label="Sign in with X"
                        >
                            <SiX size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-blue-800/40 rounded-lg text-white hover:bg-blue-700/60 transition-colors"
                            aria-label="Sign in with GitHub"
                        >
                            <FaGithub size={24} />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;