/**
 * RTHMN - Next Generation Forex / Stocks Toolkit
 * A lightweight library for market data utilities and price formatting
 */

const priceUtils = require("./lib/price-utils");
const instruments = require("./lib/instruments");
const { INSTRUMENTS, getInstrumentConfig } = instruments;

// Export individual utilities for convenience
const { roundToDigits, formatPrice, getPipValue } = priceUtils;

// Export everything
module.exports = {
  // Price utilities
  priceUtils,
  roundToDigits,
  formatPrice,
  getPipValue,
  // Instruments (optional exports)
  instruments,
  INSTRUMENTS,
  getInstrumentConfig,
};
