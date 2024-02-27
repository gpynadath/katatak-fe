"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestedIndentSize = exports.getIndentSize = exports.createIndentString = exports.INDENT_SYMBOL = exports.INDENT_SIZE = void 0;

var Braces = _interopRequireWildcard(require("./braces"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const INDENT_SIZE = 2; // Better for small screens

exports.INDENT_SIZE = INDENT_SIZE;
const INDENT_SYMBOL = ' '; // Spaces over tabs

/**
 * Gets the indentation size of the given line of code.
 * @param line Line of code.
 * @returns number.
 */

exports.INDENT_SYMBOL = INDENT_SYMBOL;

const getIndentSize = line => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== INDENT_SYMBOL) {
      const trimmed = line.trimEnd();
      const lastChar = trimmed.substring(trimmed.length - 1); // Extra indentation if inside a regular brace.
      // Inclues colon for python.

      const addedIndent = Braces.isOpenBrace(lastChar, true) || lastChar === ':' ? INDENT_SIZE : 0;
      return i + addedIndent;
    }
  }

  return 0;
};
/**
 * Analyses the lines of code (from end to start) and finds
 * the best indentation size for the new line.
 * @param lines The lines of code to analyze.
 * @returns number
 */


exports.getIndentSize = getIndentSize;

const getSuggestedIndentSize = lines => {
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim().length > 0) {
      return getIndentSize(lines[i]);
    }
  }

  return 0;
};
/**
 * Creates an indentation string of the given size.
 * The preset indentation size is used by default.
 * @param indentSize Optional indentation size.
 * @returns string
 */


exports.getSuggestedIndentSize = getSuggestedIndentSize;

const createIndentString = function () {
  let indentSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INDENT_SIZE;
  let str = '';

  for (let i = 0; i < indentSize; i++) {
    str += INDENT_SYMBOL;
  }

  return str;
};

exports.createIndentString = createIndentString;
//# sourceMappingURL=indentation.js.map