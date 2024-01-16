import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, (value: string) => void] {
  const pathname = usePathname();
  const [storedValue, setStoredValue] = useState<string>(initialValue);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setValue(window.localStorage.getItem(key) || initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedValue, pathname]);
  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };
  return [storedValue, setValue];
}
