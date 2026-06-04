import React from 'react';
import Logo from './Logo';

const Sidebar = ({ 
  items = [], 
  activeId, 
  onItemClick, 
  onLogout,
  onClose
}) => {
  return (
    <div className="h-full flex flex-col py-6 px-4 relative">

      {/* 2. Close Button (Visible only on Mobile) */}
      <button 
        onClick={onClose}
        className="lg:hidden absolute top-6 right-6 p-2 text-text-low hover:text-error transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* 1. Branding Section */}
      <div className="px-4 mb-10">
        <Logo />
      </div>

      {/* 2. Navigation Items Area */}
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
        {items.map((item) => {
          const isActive = activeId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200 group w-full
                
                /* Active State (Flat - No Shadow) */
                ${isActive 
                  ? 'bg-primary/10 text-primary font-bold' 
                  : 'text-text-low hover:bg-muted/50 hover:text-text-high'}
              `}
            >
              {/* Icon Container */}
              <div className={`
                flex items-center justify-center w-5 h-5
                ${isActive ? 'text-primary' : 'text-text-low group-hover:text-text-high'}
              `}>
                {item.icon}
              </div>

              {/* Label */}
              <span className="text-sm tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Footer Section (Logout) */}
      <div className="mt-auto px-2 pt-6 border-t border-border/10">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-text-low hover:bg-error/5 hover:text-error transition-all duration-200 group"
        >
          <div className="w-5 h-5 flex items-center justify-center opacity-70 group-hover:opacity-100">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
