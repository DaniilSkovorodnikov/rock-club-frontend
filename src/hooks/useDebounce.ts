import { useCallback, useRef } from "react";

export function useDebounce(callback: Function, delay: number) {
    const timeoutRef = useRef<number | null>(null);
  
    const debouncedFunction = useCallback(
      (...args: unknown[]) => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          callback(...args);
        }, delay);
      },
      [callback, delay]
    );
  
    return debouncedFunction;
}