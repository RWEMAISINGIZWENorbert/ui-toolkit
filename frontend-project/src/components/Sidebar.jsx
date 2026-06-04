import React from 'react';
import { Logout } from 'react-iconly';
import Logo from './Logo';
import NavIcon from './NavIcon';

const Sidebar = ({ 
  items = [], 
  activeId, 
  onItemClick, 
  onLogout,
  onClose
}) => {
  return (
    <div className="h-full min-h-screen flex flex-col py-6 px-4 relative bg-card">

      <button 
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="lg:hidden absolute top-6 right-6 p-2 text-text-low hover:text-error transition-colors rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="px-4 mb-10">
        <Logo />
      </div>

      <div className="flex-1 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const IconComponent = item.Icon;
          
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onItemClick(item.id)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-colors duration-200 group w-full text-left
                
                ${isActive 
                  // ? 'bg-primary/10 text-primary font-semibold' 
                  ? 'bg-transparent text-primary font-semibold' 
                  : 'text-text-low hover:bg-muted/60 hover:text-text-high'}
              `}
            >
              <div className={`
                nav-icon-shake flex items-center justify-center
                ${isActive ? 'text-primary' : 'text-text-low group-hover:text-text-high'}
              `}>
                <NavIcon IconComponent={IconComponent} active={isActive} />
              </div>

              <span className="text-sm tracking-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto px-2 pt-6 border-t border-border">
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-text-low hover:bg-error/5 hover:text-error transition-colors duration-200 group"
        >
          <div className="nav-icon-shake text-text-low group-hover:text-error">
            <NavIcon IconComponent={Logout} active={false} />
          </div>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
