export declare const INDENT_SIZE = 2;
export declare const INDENT_SYMBOL = " ";
/**
 * Gets the indentation size of the given line of code.
 * @param line Line of code.
 * @returns number.
 */
export declare const getIndentSize: (line: string) => number;
/**
 * Analyses the lines of code (from end to start) and finds
 * the best indentation size for the new line.
 * @param lines The lines of code to analyze.
 * @returns number
 */
export declare const getSuggestedIndentSize: (lines: string[]) => number;
/**
 * Creates an indentation string of the given size.
 * The preset indentation size is used by default.
 * @param indentSize Optional indentation size.
 * @returns string
 */
export declare const createIndentString: (indentSize?: number) => string;
