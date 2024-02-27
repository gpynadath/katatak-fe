const braces = new Map([['{', '}'], ['(', ')'], ['[', ']'], ['<', '>'], ['"', '"'], ["'", "'"], ['`', '`']]);
const regularBraces = new Set(['{', '(', '[', '<']);
/**
 * Check if the string is an opening brace.
 * @param str Brace to check.
 * @param onlyRegularBraces Return true only on `{`, `(`, `[`, or `<`.
 * @returns boolean
 */

export const isOpenBrace = function (str) {
  let onlyRegularBraces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (onlyRegularBraces && !isRegularBrace(str)) {
    return false;
  }

  return braces.has(str);
};
/**
 * Check if the string is a closing brace.
 * @param str Brace to check.
 * @returns boolean
 */

export const isCloseBrace = str => {
  for (let value of braces.values()) {
    if (str === value) {
      return true;
    }
  }

  return false;
};
/**
 * Checks if the two given characters are a brace pair.
 * @param openBrace Potential open brace.
 * @param closeBrace Potential close brace.
 * @returns boolean
 */

export const isBracePair = (openBrace, closeBrace) => {
  if (!openBrace || !closeBrace) {
    return false;
  }

  return isOpenBrace(openBrace) && getCloseBrace(openBrace) === closeBrace;
};
/**
 * Gets the closing brace given the opening brace.
 * Returns an empty string if there is no brace match.
 * @param str Opening brace.
 * @returns string
 */

export const getCloseBrace = str => {
  return braces.get(str) || '';
};
/**
 * Check if the string is a regular brace.
 * Only true on `{`, `(`, `[`, or `<`.
 * @param str Brace to check.
 * @returns boolean
 */

export const isRegularBrace = str => {
  return regularBraces.has(str);
};
//# sourceMappingURL=braces.js.map