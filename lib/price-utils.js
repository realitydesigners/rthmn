/**
 * Price formatting and calculation utilities
 */
const { getInstrumentConfig } = require("./instruments");

/**
 * Formats or rounds a price according to instrument specifications.
 * - By default returns a string with fixed decimals for display
 * - If options.asNumber is true, returns a rounded number for calculations
 * @param {number} price - The price to format
 * @param {Object|string} [instrumentOrSymbol] - Instrument config or a symbol string (e.g., "BTC/USD", "EURUSD")
 * @param {{ digits?: number, asNumber?: boolean }} [options]
 * @returns {string|number} Formatted price string or rounded number
 */
function formatPrice(price, instrumentOrSymbol, options = {}) {
  const config =
    instrumentOrSymbol && typeof instrumentOrSymbol === "object"
      ? instrumentOrSymbol
      : getInstrumentConfig(instrumentOrSymbol);

  const digits =
    typeof options.digits === "number"
      ? options.digits
      : (config && config.digits) || 2;

  const multiplier = Math.pow(10, digits);
  const rounded = Math.round(price * multiplier) / multiplier;

  if (options.asNumber) return rounded;
  return rounded.toFixed(digits);
}

/**
 * Gets the pip/point value for an instrument
 * @param {Object} instrumentConfig - Instrument configuration with point property
 * @returns {number} Point value
 */
function getPipValue(instrumentConfig) {
  return instrumentConfig.point || 0.0001;
}

module.exports = {
  formatPrice,
  getPipValue,
};
