
const Card = ({ children, className = '', title, action }) => {
  return (
    <div className={`bg-card border border-transparent rounded-xl shadow-none overflow-hidden ${className}`}>
      {(title || action) && (
        <div className="px-6 py-4 border-b border-transparent flex justify-between items-center">
          {title && <h3 className="font-semibold text-lg text-text-high">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
