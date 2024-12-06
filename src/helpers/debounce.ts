export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: 
    T, delay = 250): (...args: Parameters<T>) => void {
    let timeout: number;

    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}