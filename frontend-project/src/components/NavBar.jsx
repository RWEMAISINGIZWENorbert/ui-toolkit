import React, { useState } from 'react';
import Logo from './Logo';
import Button from './Button';

const NavBar = ({ navItems = [], onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth Scroll Helper
  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4">
      {/* The Floating Glassmorphism Container */}
      {/* <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg relative"> */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-primary/30 backdrop-blur-sm relative">
        
        {/* LEFT: Branding */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo />
        </div>

        {/* CENTER: Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId)}
              className="text-sm font-medium text-text-low hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* RIGHT: Actions */}
        <div className="hidden md:block">
          <Button 
            text="Get Started" 
            onClick={onGetStarted} 
            className="py-2 px-5 text-sm"
          />
        </div>

        {/* MOBILE: Hamburger Button */}
        <button 
          className="md:hidden text-text-high p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

        {/* MOBILE: Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-card border border-border rounded-xl shadow-xl flex flex-col gap-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.targetId}
                onClick={() => handleNavClick(item.targetId)}
                className="text-left py-2 text-sm font-medium text-text-high hover:text-primary border-b border-border/50"
              >
                {item.label}
              </button>
            ))}
            <Button text="Get Started" onClick={onGetStarted} className="w-full mt-2" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
