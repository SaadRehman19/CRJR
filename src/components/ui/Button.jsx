const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 flex items-center gap-2 cursor-pointer';

  const variants = {
    primary: 'text-white hover:opacity-90 font-bold text-[16px]',
    outline: 'bg-white text-[#334155] border border-[#e2e8f0] hover:border-[#063482] hover:text-[#063482] shadow-sm font-bold text-[16px]',
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
      {children}
    </button>
  );
};

export default Button;

