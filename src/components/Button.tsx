type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
  label: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  label,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    px-4 py-2
    rounded-md
    font-semibold
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors
  `;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-[#0D7377] text-white
      hover:bg-blue-700
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-200 text-gray-800
      hover:bg-gray-300
      focus:ring-gray-400
    `,
    danger: `
      bg-red-600 text-white
      hover:bg-red-700
      focus:ring-red-500
    `,
  };

  const disabledClasses = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'cursor-pointer';

  const finalClass = [
    baseClasses,
    variantClasses[variant],
    disabledClasses,
    className,
  ].join(' ');

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
    >
      {label}
    </button>
  );
}
