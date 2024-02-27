"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CodeEditorSyntaxStyles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _SyntaxHighlighter = _interopRequireWildcard(require("./SyntaxHighlighter"));

var Braces = _interopRequireWildcard(require("./braces"));

var Indentation = _interopRequireWildcard(require("./indentation"));

var Strings = _interopRequireWildcard(require("./strings"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CodeEditorSyntaxStyles = _SyntaxHighlighter.SyntaxHighlighterSyntaxStyles;
exports.CodeEditorSyntaxStyles = CodeEditorSyntaxStyles;

const CodeEditor = props => {
  const {
    style,
    language,
    syntaxStyle = CodeEditorSyntaxStyles.atomOneDark,
    initialValue = '',
    onChange,
    onKeyPress,
    showLineNumbers = false,
    readOnly = false,
    autoFocus = true,
    forwardedRef
  } = props;
  const {
    width = undefined,
    height = undefined,
    marginTop = undefined,
    marginBottom = undefined,
    inputLineHeight = undefined,
    inputColor = 'rgba(0,0,0,0)',
    ...addedStyle
  } = style || {};
  const {
    fontFamily = _reactNative.Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
    fontSize = 16,
    padding = 16
  } = addedStyle;
  const [value, setValue] = (0, _react.useState)(initialValue);
  const highlighterRef = (0, _react.useRef)(null);
  const inputRef = (0, _react.useRef)(null);
  const inputSelection = (0, _react.useRef)({
    start: 0,
    end: 0
  }); // Only when line numbers are showing

  const lineNumbersPadding = showLineNumbers ? 1.75 * fontSize : undefined; // Sync forwardedRef with inputRef

  (0, _react.useImperativeHandle)(forwardedRef, () => inputRef.current, [inputRef]);
  (0, _react.useEffect)(() => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange, value]); // Negative values move the cursor to the left

  const moveCursor = (current, amount) => {
    var _inputRef$current;

    const newPosition = current + amount;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.setNativeProps({
      selection: {
        start: newPosition,
        end: newPosition
      }
    });
    return newPosition;
  };

  const addIndentation = val => {
    let cursorPosition = inputSelection.current.start - 1; // All lines before the cursor

    const preLines = val.substring(0, cursorPosition).split('\n');
    const indentSize = Indentation.getSuggestedIndentSize(preLines);
    let indentation = Indentation.createIndentString(indentSize); // Add newline and indentation on a regular brace pair

    const leftChar = val[cursorPosition - 1] || '';
    const rightChar = val[cursorPosition + 1] || '';

    if (Braces.isBracePair(leftChar, rightChar)) {
      let addedIndentionSize = Braces.isRegularBrace(leftChar) ? Math.max(indentSize - Indentation.INDENT_SIZE, 0) : indentSize;
      indentation += '\n' + Indentation.createIndentString(addedIndentionSize); // Don't update local cursor position to insert all new changes in one insert call

      moveCursor(cursorPosition, -addedIndentionSize);
    }

    return Strings.insertStringAt(val, cursorPosition, indentation);
  };

  const addClosingBrace = (val, key) => {
    let cursorPosition = inputSelection.current.start;
    cursorPosition = moveCursor(cursorPosition, -1);
    return Strings.insertStringAt(val, cursorPosition, Braces.getCloseBrace(key));
  };

  const handleChangeText = text => {
    setValue(Strings.convertTabsToSpaces(text));
  };

  const handleScroll = e => {
    var _highlighterRef$curre;

    // Match text input scroll with syntax highlighter scroll
    const y = e.nativeEvent.contentOffset.y;
    (_highlighterRef$curre = highlighterRef.current) === null || _highlighterRef$curre === void 0 ? void 0 : _highlighterRef$curre.scrollTo({
      y,
      animated: false
    });
  };

  const handleKeyPress = e => {
    const key = e.nativeEvent.key;

    switch (key) {
      case 'Enter':
        setTimeout(() => {
          setValue(curr => addIndentation(curr));
        }, 10);
        break;

      default:
        if (Braces.isOpenBrace(key)) {
          setTimeout(() => {
            setValue(curr => addClosingBrace(curr, key));
          }, 10);
        }

        break;
    }

    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  const handleSelectionChange = e => {
    inputSelection.current = e.nativeEvent.selection;
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width,
      height,
      marginTop,
      marginBottom
    }
  }, /*#__PURE__*/_react.default.createElement(_SyntaxHighlighter.default, {
    language: language,
    addedStyle: addedStyle,
    syntaxStyle: syntaxStyle,
    scrollEnabled: false,
    showLineNumbers: showLineNumbers,
    ref: highlighterRef
  }, value), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: [styles.input, {
      lineHeight: inputLineHeight,
      color: inputColor,
      fontFamily: fontFamily,
      fontSize: fontSize,
      padding,
      paddingTop: padding,
      paddingLeft: lineNumbersPadding
    }],
    value: value,
    onChangeText: handleChangeText,
    onScroll: handleScroll,
    onKeyPress: handleKeyPress,
    onSelectionChange: handleSelectionChange,
    autoCapitalize: "none",
    autoComplete: "off",
    autoCorrect: false,
    autoFocus: autoFocus,
    keyboardType: "ascii-capable",
    editable: !readOnly,
    ref: inputRef,
    multiline: true
  }));
};

const CodeEditorWithForwardRef = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(CodeEditor, _extends({}, props, {
  forwardedRef: ref
})));

var _default = CodeEditorWithForwardRef;
exports.default = _default;

const styles = _reactNative.StyleSheet.create({
  input: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    textAlignVertical: 'top'
  }
});
//# sourceMappingURL=CodeEditor.js.map