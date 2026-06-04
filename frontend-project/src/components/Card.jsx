import { cn } from '../lib/utils';

export const Card = ({ children, className = '' }) => (
  <div
    className={cn(
      'bg-card text-text-high border border-border rounded-lg shadow-sm overflow-hidden',
      className
    )}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={cn('flex flex-col gap-1 px-6 py-4 border-b border-border', className)}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={cn('font-semibold text-lg leading-none tracking-tight text-text-high', className)}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={cn('text-sm text-text-low', className)}>{children}</p>
);

export const CardAction = ({ children, className = '' }) => (
  <div className={cn('ml-auto shrink-0', className)}>{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={cn('p-6 pt-0', className)}>{children}</div>
);

/** Backward-compatible card with title + action props */
const CardLegacy = ({ children, className = '', title, action, description }) => {
  const hasHeader = title || action || description;

  return (
    <Card className={className}>
      {hasHeader && (
        <CardHeader className={action ? 'flex-row items-center justify-between space-y-0' : undefined}>
          <div className="flex flex-col gap-1">
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {action && <CardAction>{action}</CardAction>}
        </CardHeader>
      )}
      <div className={cn(hasHeader ? 'p-6 pt-0' : 'p-6')}>{children}</div>
    </Card>
  );
};

export default CardLegacy;
