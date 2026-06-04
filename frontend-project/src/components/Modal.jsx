import React, { useEffect } from 'react';
import { cn } from '../lib/utils';

const Modal = ({ isOpen, onClose, title, description, children, footer, className = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden
      />

      <div
        className={cn(
          'relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-lg border border-border bg-card shadow-lg',
          className
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4">
          <div className="flex flex-col gap-1">
            <h3 id="modal-title" className="text-lg font-semibold text-text-high">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-text-low">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-text-low transition-colors hover:bg-muted hover:text-text-high focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 text-text-high">{children}</div>

        {footer && (
          <div className="flex justify-end gap-3 rounded-b-lg border-t border-border bg-muted/30 px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
