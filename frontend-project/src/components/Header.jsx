import React from 'react';
import { cn } from '../lib/utils';

const Header = ({ label, description, children, className = '' }) => {
  return (
    <header
      className={cn(
        'mb-6 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-text-high">{label}</h1>
        {description && (
          <p className="text-sm text-text-low">{description}</p>
        )}
      </div>

      {children && (
        <div className="flex flex-wrap items-center gap-3">{children}</div>
      )}
    </header>
  );
};

export default Header;
