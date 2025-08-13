/**
 * Price formatting and calculation utilities
 */

/**
 * Rounds a value to a specific number of decimal places
 * @param {number} value - The value to round
 * @param {number} digits - Number of decimal places
 * @returns {number} Rounded value
 */
function roundToDigits(value, digits) {
  const multiplier = Math.pow(10, digits);
  const roundedValue = Math.round(value * multiplier) / multiplier;
  return Number(roundedValue.toFixed(digits));
}

/**
 * Formats a price according to instrument specifications
 * @param {number} price - The price to format
 * @param {Object} instrumentConfig - Instrument configuration with digits property
 * @returns {string} Formatted price string
 */
function formatPrice(price, instrumentConfig) {
  const digits = instrumentConfig.digits || 2;
  return price.toFixed(digits);
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
  roundToDigits,
  formatPrice,
  getPipValue,
};
