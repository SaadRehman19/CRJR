import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import crjrLogo from '../../assets/crjr-ventures-logo.png';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Companies', path: '/companies' },
    { name: 'Work with me', path: '/work-with-me' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full py-4 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={crjrLogo}
            alt="CRJR Ventures"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-[#0F172A] border-b-2 border-[#0EA5E9] pb-1'
                  : 'text-gray-600 hover:text-[#0F172A]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile: Hamburger + CTA Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Animated Hamburger Menu Button */}
          <button
            className="p-2 z-50 relative w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-[#0F172A] rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-[#0F172A] rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-[#0F172A] rounded-full origin-center"
              />
            </div>
          </button>

          {/* CTA Button - Mobile */}
          <Link to="/work-with-me#contact-form">
            <Button variant="primary" className="text-sm px-4 py-2">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <Link to="/work-with-me#contact-form" className="hidden md:block">
          <Button variant="primary">
            Contact Us
          </Button>
        </Link>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200 z-40 overflow-hidden"
            >
              <div className="flex flex-col py-4 px-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`py-3 text-base font-medium transition-colors border-b border-gray-100 block ${
                        location.pathname === link.path
                          ? 'text-[#0EA5E9]'
                          : 'text-gray-600 hover:text-[#0F172A]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

