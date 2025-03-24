type InputProps = {
  id?: string;
  value: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  value,
  name,
  label,
  type = "text",
  placeholder,
  className,
  onBlur,
  onChange,
  ...props
}: InputProps) {
  return (
    <div>
      <div className="mt-2">
        <label htmlFor={id} className="block text-[#8F8F8F] text-[16px] font-bold font-(family-name:--font-montserrat)">
          {label}
        </label>
        <input
          contentEditable
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`
            block w-full bg-[#F8F8F8] rounded-md border-0
            shadow-sm ring-1 ring-inset ring-[#D8D8D8] placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-[#0D7377] focus-visible:outline-[#0D7377] 
            sm:text-[1rem] p-[18px]
            font-(family-name:--font-montserrat)
            ${className}
          `}
          {...props}  
        />
      </div>
    </div>
  );
}