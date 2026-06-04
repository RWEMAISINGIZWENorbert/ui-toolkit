import React from 'react';
import NavBar from '../NavBar'; // Import the base reusable NavBar

const LandingNavBar = ({ onSignInClick }) => {
  
  // 1. Define your specific landing page items here
  const landingNavItems = [
    { label: 'Features', targetId: 'features' },
    { label: 'Pricing', targetId: 'pricing' },
    { label: 'About Us', targetId: 'about' },
  ];

  // 2. Define what happens when "Get Started" is clicked
  const handleGetStarted = () => {
    // You can navigate to SignUp or scroll to Register section
    const registerSection = document.getElementById('hero');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavBar 
      navItems={landingNavItems} 
      onGetStarted={handleGetStarted} 
    />
  );
};

export default LandingNavBar;
