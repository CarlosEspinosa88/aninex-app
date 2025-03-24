import { useState, useEffect } from 'react';
import { useDebounceProps } from '@/interfaces';

export const useDebounce = ({ value, delay = 400}: useDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue
}
