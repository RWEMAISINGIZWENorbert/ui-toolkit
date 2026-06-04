import React from 'react';

const ICON_SIZE = 22;

/**
 * Iconly nav icon: light when inactive, bold when active (matches Flutter Iconly sets).
 */
const NavIcon = ({ IconComponent, active = false, className = '' }) => {
  if (!IconComponent) return null;

  return (
    <span className={`nav-icon inline-flex shrink-0 items-center justify-center ${className}`}>
      <IconComponent
        set={active ? 'bold' : 'light'}
        primaryColor="currentColor"
        size={ICON_SIZE}
      />
    </span>
  );
};

export default NavIcon;
