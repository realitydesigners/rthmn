export interface InstrumentConfig {
  point?: number;
  digits?: number;
}

export function roundToDigits(value: number, digits: number): number;
export function formatPrice(
  price: number,
  instrumentConfig: InstrumentConfig
): string;
export function getPipValue(instrumentConfig: InstrumentConfig): number;

export const priceUtils: {
  roundToDigits: typeof roundToDigits;
  formatPrice: typeof formatPrice;
  getPipValue: typeof getPipValue;
};
