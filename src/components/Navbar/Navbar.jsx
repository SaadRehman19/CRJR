import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

        {/* CTA Button */}
        <Link to="/work-with-me#contact-form" className="hidden md:block">
          <Button variant="primary">
            Contact Us
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40">
          <div className="flex flex-col py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={`py-3 text-base font-medium transition-colors border-b border-gray-100 ${
                  location.pathname === link.path
                    ? 'text-[#0EA5E9]'
                    : 'text-gray-600 hover:text-[#0F172A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/work-with-me#contact-form"
              onClick={closeMobileMenu}
              className="mt-4"
            >
              <Button variant="primary" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

