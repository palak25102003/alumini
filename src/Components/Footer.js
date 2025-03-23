import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">About Us</h3>
          <p className="text-white/90">"Connecting Alumni, Strengthening Bonds"</p>
          <p className="text-white/80">
            The SISTec Alumni Association is dedicated to fostering lifelong relationships between 
            alumni and their alma mater. Our platform provides opportunities for networking, 
            mentorship, career growth, and philanthropic contributions. Stay connected, 
            celebrate achievements, and be a part of our thriving alumni community.
          </p>
          <p className="text-white/90">
            🚀 Empowering Alumni, Enriching Legacies!
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            {[
              'Profile',
              'Search Alumni',
              'Donation',
              'Add Opening',
              'Opportunities',
              'Stories',
              'Events',
              'Feedback'
            ].map((link) => (
              <motion.a 
                key={link}
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Products & Contact Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Products</h3>
            <div className="flex flex-col space-y-2">
              {[
                'Web design',
                'App Design',
                'Product Design'
              ].map((product) => (
                <motion.a 
                  key={product}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {product}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                aria-label="Instagram"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <FaInstagram size={28} className="text-white hover:text-pink-300 transition-colors" />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.3 }}
              >
                <FaLinkedin size={28} className="text-white hover:text-blue-300 transition-colors" />
              </motion.a>
            </div>
            <motion.button
              className="border-2 border-white hover:bg-white hover:text-indigo-700 rounded-full px-6 py-2 text-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-xs text-white/60">
        <p>
          ©2001-{currentYear} All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are 
          trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc.
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <span>|</span>
          <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
          <span>|</span>
          <Link to="/cookie-preferences" className="hover:text-white transition-colors">Cookie Preferences</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;