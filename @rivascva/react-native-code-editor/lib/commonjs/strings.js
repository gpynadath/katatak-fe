"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertStringAt = exports.convertTabsToSpaces = void 0;

var Indentation = _interopRequireWildcard(require("./indentation"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Converts tabs to the appropriate number of spaces in the given string.
 * @param str Root string.
 * @returns string
 */
const convertTabsToSpaces = str => {
  return str.replace('\t', Indentation.createIndentString());
};
/**
 * Inserts a substring into a string at a specific position.
 * @param str Root string.
 * @param position Position to insert.
 * @param strToInsert String to be inserted.
 * @returns string
 */


exports.convertTabsToSpaces = convertTabsToSpaces;

const insertStringAt = (str, position, strToInsert) => {
  return str.substring(0, position + 1) + strToInsert + str.substring(position + 1);
};

exports.insertStringAt = insertStringAt;
//# sourceMappingURL=strings.js.map