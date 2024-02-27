function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import SyntaxHighlighter, { SyntaxHighlighterSyntaxStyles } from './SyntaxHighlighter';
import * as Braces from './braces';
import * as Indentation from './indentation';
import * as Strings from './strings';
export const CodeEditorSyntaxStyles = SyntaxHighlighterSyntaxStyles;

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
    fontFamily = Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
    fontSize = 16,
    padding = 16
  } = addedStyle;
  const [value, setValue] = useState(initialValue);
  const highlighterRef = useRef(null);
  const inputRef = useRef(null);
  const inputSelection = useRef({
    start: 0,
    end: 0
  }); // Only when line numbers are showing

  const lineNumbersPadding = showLineNumbers ? 1.75 * fontSize : undefined; // Sync forwardedRef with inputRef

  useImperativeHandle(forwardedRef, () => inputRef.current, [inputRef]);
  useEffect(() => {
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

  return /*#__PURE__*/React.createElement(View, {
    style: {
      width,
      height,
      marginTop,
      marginBottom
    }
  }, /*#__PURE__*/React.createElement(SyntaxHighlighter, {
    language: language,
    addedStyle: addedStyle,
    syntaxStyle: syntaxStyle,
    scrollEnabled: false,
    showLineNumbers: showLineNumbers,
    ref: highlighterRef
  }, value), /*#__PURE__*/React.createElement(TextInput, {
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

const CodeEditorWithForwardRef = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(CodeEditor, _extends({}, props, {
  forwardedRef: ref
})));
export default CodeEditorWithForwardRef;
const styles = StyleSheet.create({
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