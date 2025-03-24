import Caret from '@/svg/Caret';

type InputSelectProps = {
  id: string;
  name?: string;
  label: string;
  value: string | number;
  options: Array<string | number>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function InputSelect({
  id,
  label,
  value,
  options,
  onChange
}: InputSelectProps) {
  return (
    <div className="mt-2">
      <label 
        htmlFor={id} 
        className="block text-[#8F8F8F] text-[16px] font-bold"
      >
        {label}
      </label>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="
            block w-full bg-[#F8F8F8] rounded-md border-0 shadow-sm ring-1 ring-inset ring-[#D8D8D8]
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0D7377]
            focus-visible:outline-[#0D7377] appearance-none p-[18px] pr-10 font-(family-name:--font-montserrat)"
        >
          <option value="">Any</option>
          {options.map((option, idx) => (
            <option key={`${option}-${idx}`} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute top-0 bottom-0 right-[10px] flex items-center px-2 pointer-events-none">
          <Caret />
        </div>
      </div>
    </div>
  );
}