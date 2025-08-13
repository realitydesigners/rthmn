export interface InstrumentConfig {
  point?: number;
  digits?: number;
}

export function roundToDigits(value: number, digits: number): number;
export function formatPrice(
  price: number,
  instrument: InstrumentConfig | string
): string;
export function getPipValue(instrumentConfig: InstrumentConfig): number;
export function getInstrumentConfig(symbol: string): InstrumentConfig;

export type Instruments = {
  FOREX: Record<string, InstrumentConfig>;
  CRYPTO: Record<string, InstrumentConfig>;
  EQUITY: Record<string, InstrumentConfig>;
  ETF: Record<string, InstrumentConfig>;
};
export const INSTRUMENTS: Instruments;

export const priceUtils: {
  roundToDigits: typeof roundToDigits;
  formatPrice: typeof formatPrice;
  getPipValue: typeof getPipValue;
};
