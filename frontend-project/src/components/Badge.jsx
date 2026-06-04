import React from 'react';
import { cn } from '../lib/utils';

const variantStyles = {
  default: 'bg-muted text-text-high',
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
  destructive: 'bg-error/10 text-error',
};

const Badge = ({ children, variant = 'default', className = '' }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium',
      variantStyles[variant] ?? variantStyles.default,
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
