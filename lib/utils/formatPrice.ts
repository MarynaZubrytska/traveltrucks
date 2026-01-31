export function formatPriceEUR(value: number): string {
  return `€${Number(value).toFixed(2)}`;
}