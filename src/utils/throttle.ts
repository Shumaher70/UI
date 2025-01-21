export function throttle<T extends (...args: T[]) => void>(
  fn: T,
  time: number,
): (...args: Parameters<T>) => void {
  let isWaiting: boolean = false;

  return function (...args: Parameters<T>): void {
    if (isWaiting) return;
    fn(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, time);
  };
}
