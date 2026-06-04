import React from 'react';
import { cn } from '../lib/utils';
import Spinner from './Spinner';

const variantStyles = {
  primary:
    'bg-primary text-white hover:bg-primary-hover border border-transparent shadow-sm',
  secondary:
    'bg-card text-text-high border border-border hover:bg-muted shadow-sm',
  outline:
    'bg-transparent text-text-high border border-border hover:bg-muted shadow-sm',
  ghost: 'bg-transparent text-text-high border border-transparent hover:bg-muted',
  danger:
    'bg-error text-white hover:opacity-90 border border-transparent shadow-sm',
  destructive:
    'bg-error text-white hover:opacity-90 border border-transparent shadow-sm',
};

const sizeStyles = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  default: 'h-9 px-4 text-sm gap-2',
  lg: 'h-10 px-6 text-sm gap-2',
};

const Button = ({
  text,
  children,
  icon,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'default',
  className = '',
  disabled,
  loading,
  ...props
}) => {
  const resolvedVariant = variant === 'danger' ? 'destructive' : variant;
  const label = children ?? text;
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-md',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-card',
        'disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none',
        variantStyles[resolvedVariant] ?? variantStyles.primary,
        sizeStyles[size] ?? sizeStyles.default,
        className
      )}
      {...props}
    >
      {loading ? (
        <Spinner size="small" color="low" inline={true} />
      ) : (
        icon && <span className="w-4 h-4 shrink-0">{icon}</span>
      )}
      {label != null && (
        <span>{loading && typeof label === 'string' ? 'Processing...' : label}</span>
      )}
    </button>
  );
};

export default Button;
