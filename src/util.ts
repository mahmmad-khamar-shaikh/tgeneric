
export function compare<T>(ele1: T, ele2: T): number {
  if (ele1 > ele2) return 1;
  if (ele2 > ele1) return -1;
  return 0;
}