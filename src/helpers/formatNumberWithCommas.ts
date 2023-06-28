export function numberWithCommas(x, max = 3): string {
  if (typeof x !== 'number') x = Number(x);

  const formattedNumber = x.toLocaleString('it-IT', { minimumFractionDigits: 0, maximumFractionDigits: max });
  return formattedNumber;
}
