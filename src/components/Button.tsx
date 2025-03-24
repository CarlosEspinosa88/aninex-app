type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'warning';

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
    rounded-xl
    font-semibold
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-colors
  `;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-[#0D7377] text-white
      hover:bg-[#094446]
    `,
    secondary: `
      bg-[#ff567f] text-gray-800
      hover:bg-[#9d2f4a]
    `,
    danger: `
      bg-[#860101] text-white
      hover:bg-[#9d2626]
    `,
    warning: `
      bg-[#eac700] text-white
      hover:bg-[#b39800]
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
