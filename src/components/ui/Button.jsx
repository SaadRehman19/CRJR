const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 flex items-center gap-2 cursor-pointer relative overflow-hidden group';

  const variants = {
    primary: 'text-white hover:scale-105 hover:shadow-2xl font-bold text-[16px] hover:brightness-110',
    outline: 'bg-white text-[#334155] border border-[#e2e8f0] hover:border-[#063482] hover:text-[#063482] hover:scale-105 hover:shadow-lg shadow-sm font-bold text-[16px]',
  };

  const gradientStyle = variant === 'primary'
    ? { background: 'linear-gradient(191.934deg, rgba(27, 157, 217, 1) 9.217%, rgba(6, 52, 130, 1) 83.039%)' }
    : {};

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={gradientStyle}
      {...props}
    >
      {/* Glow effect on hover */}
      {variant === 'primary' && (
        <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-white to-transparent blur-xl"></span>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;

