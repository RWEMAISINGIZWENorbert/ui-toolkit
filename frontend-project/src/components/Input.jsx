import React from 'react';
import { cn } from '../lib/utils';

const fieldBase =
  'flex h-9 w-full rounded-md border bg-card px-3 py-1 text-sm text-text-high shadow-sm transition-colors placeholder:text-text-low focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50';

const Input = ({
  label,
  id,
  type = 'text',
  placeholder,
  error,
  hint,
  className = '',
  ...props
}) => {
  const hintId = hint && id ? `${id}-hint` : undefined;
  const errorId = error && id ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-text-high">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={cn(
          fieldBase,
          error
            ? 'border-error focus-visible:ring-error/25 focus-visible:border-error'
            : 'border-border focus-visible:ring-primary/25 focus-visible:border-primary'
        )}
        {...props}
      />

      {error && (
        <p id={errorId} className="text-xs font-medium text-error">
          {error}
        </p>
      )}

      {!error && hint && (
        <p id={hintId} className="text-xs text-text-low">
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
