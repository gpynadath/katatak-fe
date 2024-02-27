/**
 * Check if the string is an opening brace.
 * @param str Brace to check.
 * @param onlyRegularBraces Return true only on `{`, `(`, `[`, or `<`.
 * @returns boolean
 */
export declare const isOpenBrace: (str: string, onlyRegularBraces?: boolean) => boolean;
/**
 * Check if the string is a closing brace.
 * @param str Brace to check.
 * @returns boolean
 */
export declare const isCloseBrace: (str: string) => boolean;
/**
 * Checks if the two given characters are a brace pair.
 * @param openBrace Potential open brace.
 * @param closeBrace Potential close brace.
 * @returns boolean
 */
export declare const isBracePair: (openBrace: string, closeBrace: string) => boolean;
/**
 * Gets the closing brace given the opening brace.
 * Returns an empty string if there is no brace match.
 * @param str Opening brace.
 * @returns string
 */
export declare const getCloseBrace: (str: string) => string;
/**
 * Check if the string is a regular brace.
 * Only true on `{`, `(`, `[`, or `<`.
 * @param str Brace to check.
 * @returns boolean
 */
export declare const isRegularBrace: (str: string) => boolean;
