import React, { useState, useRef, useEffect, useId } from 'react';
import { cn } from '../lib/utils';

const triggerBase =
  'flex h-9 w-full items-center justify-between rounded-md border bg-card px-3 text-sm shadow-sm cursor-pointer select-none transition-colors focus-visible:outline-none focus-visible:ring-2';

const Select = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  error,
  hint,
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const listboxId = useId();

  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string' || typeof opt === 'number') {
      return { value: opt, label: String(opt) };
    }
    return opt;
  });

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={cn('relative flex flex-col gap-1.5', className)} ref={dropdownRef}>
      {label && (
        <label className="text-sm font-medium text-text-high">{label}</label>
      )}

      <button
        type="button"
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          triggerBase,
          error
            ? 'border-error text-error focus-visible:ring-error/25'
            : 'border-border hover:border-primary focus-visible:ring-primary/25 focus-visible:border-primary',
          isOpen && !error && 'border-primary ring-2 ring-primary/20',
          isOpen && error && 'ring-2 ring-error/20',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <span className={selectedOption ? 'text-text-high' : 'text-text-low'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <svg
          className={cn('w-4 h-4 shrink-0 text-text-low transition-transform', isOpen && 'rotate-180')}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-50 top-full left-0 right-0 mt-1 max-h-60 overflow-y-auto rounded-md border border-border bg-card py-1 shadow-md"
        >
          {normalizedOptions.length > 0 ? (
            normalizedOptions.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                onClick={() => handleSelect(option.value)}
                className={cn(
                  'px-3 py-2 text-sm cursor-pointer transition-colors',
                  option.value === value
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-text-high hover:bg-muted'
                )}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-sm text-text-low text-center">No options available</li>
          )}
        </ul>
      )}

      {error && <p className="text-xs font-medium text-error">{error}</p>}
      {!error && hint && <p className="text-xs text-text-low">{hint}</p>}
    </div>
  );
};

export default Select;
