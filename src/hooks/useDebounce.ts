import { useEffect, useRef } from "react";

export function useDebounce(fn: Function, delay: number = 200){
    const timeoutRef = useRef<number | undefined>();
    
    useEffect(() => {
        timeoutRef.current = setTimeout(fn, delay);
        return () => clearTimeout(timeoutRef.current);
    }, [delay, fn])
}