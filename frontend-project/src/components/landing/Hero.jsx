import React from 'react';
import Button from '../Button';

const Hero = ({ 
  title = "Manage Your Market Vendors With Confidence", 
  subtitle = "The all-in-one platform for market administrators to track vendors, allocations, and payments in real-time.",
  onSignIn, 
  onSignUp 
}) => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* 1. Background Visual Accent (The SaaS Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      {/* 2. Centered Text with Adjusted Font Size */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-text-high leading-[1.2] tracking-tight">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-text-low max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 3. Centered Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <Button 
          text="Get Started (Sign Up)" 
          onClick={onSignUp} 
          className="w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-primary/20"
        />
        <Button 
          text="Sign In" 
          variant="secondary" 
          onClick={onSignIn} 
          className="w-full sm:w-auto px-8 py-4 text-base"
        />
      </div>

      {/* Optional: Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <svg className="w-6 h-6 text-text-low" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
