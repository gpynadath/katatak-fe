import * as Indentation from './indentation';
/**
 * Converts tabs to the appropriate number of spaces in the given string.
 * @param str Root string.
 * @returns string
 */

export const convertTabsToSpaces = str => {
  return str.replace('\t', Indentation.createIndentString());
};
/**
 * Inserts a substring into a string at a specific position.
 * @param str Root string.
 * @param position Position to insert.
 * @param strToInsert String to be inserted.
 * @returns string
 */

export const insertStringAt = (str, position, strToInsert) => {
  return str.substring(0, position + 1) + strToInsert + str.substring(position + 1);
};
//# sourceMappingURL=strings.js.map