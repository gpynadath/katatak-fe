function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import Highlighter from 'react-syntax-highlighter';
import * as HLJSSyntaxStyles from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const SyntaxHighlighterSyntaxStyles = HLJSSyntaxStyles;

const SyntaxHighlighter = props => {
  const {
    syntaxStyle = SyntaxHighlighterSyntaxStyles.atomOneDark,
    addedStyle,
    scrollEnabled,
    showLineNumbers = false,
    forwardedRef,
    ...highlighterProps
  } = props; // Default values

  const {
    fontFamily = Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
    fontSize = 16,
    backgroundColor = undefined,
    padding = 16,
    lineNumbersColor = 'rgba(127, 127, 127, 0.9)',
    lineNumbersBackgroundColor = undefined,
    highlighterLineHeight = undefined,
    highlighterColor = undefined
  } = addedStyle || {}; // Only when line numbers are showing

  const lineNumbersPadding = showLineNumbers ? 1.75 * fontSize : undefined;
  const lineNumbersFontSize = 0.7 * fontSize; // Prevents the last line from clipping when scrolling

  highlighterProps.children += '\n\n';

  const cleanStyle = style => {
    const clean = { ...style,
      display: undefined
    };
    return clean;
  };

  const stylesheet = Object.fromEntries(Object.entries(syntaxStyle).map(_ref => {
    let [className, style] = _ref;
    return [className, cleanStyle(style)];
  }));

  const renderLineNumbersBackground = () => /*#__PURE__*/React.createElement(View, {
    style: {
      position: 'absolute',
      top: -padding,
      left: 0,
      bottom: 0,
      width: lineNumbersPadding ? lineNumbersPadding - 5 : 0,
      backgroundColor: lineNumbersBackgroundColor
    }
  });

  const renderNode = function (nodes) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
    return nodes.reduce((acc, node, index) => {
      if (node.children) {
        var _node$properties;

        const textElement = /*#__PURE__*/React.createElement(Text, {
          key: `${key}.${index}`,
          style: [{
            color: highlighterColor || stylesheet.hljs.color
          }, ...(((_node$properties = node.properties) === null || _node$properties === void 0 ? void 0 : _node$properties.className) || []).map(c => stylesheet[c]), {
            lineHeight: highlighterLineHeight,
            fontFamily,
            fontSize,
            paddingLeft: lineNumbersPadding !== null && lineNumbersPadding !== void 0 ? lineNumbersPadding : padding
          }]
        }, renderNode(node.children, `${key}.${index}`));
        const lineNumberElement = key !== '0' || index >= nodes.length - 2 ? undefined : /*#__PURE__*/React.createElement(Text, {
          key: `$line.${index}`,
          style: {
            position: 'absolute',
            top: 5,
            bottom: 0,
            paddingHorizontal: nodes.length - 2 < 100 ? 5 : 0,
            textAlign: 'center',
            color: lineNumbersColor,
            fontFamily,
            fontSize: lineNumbersFontSize,
            width: lineNumbersPadding ? lineNumbersPadding - 5 : 0
          }
        }, index + 1);
        acc.push(showLineNumbers && lineNumberElement ? /*#__PURE__*/React.createElement(View, {
          key: `view.line.${index}`
        }, lineNumberElement, textElement) : textElement);
      }

      if (node.value) {
        // To prevent an empty line after each string
        node.value = node.value.replace('\n', ''); // To render blank lines at an equal font height

        node.value = node.value.length ? node.value : ' ';
        acc.push(node.value);
      }

      return acc;
    }, []);
  };

  const nativeRenderer = _ref2 => {
    let {
      rows
    } = _ref2;
    return /*#__PURE__*/React.createElement(ScrollView, {
      style: [stylesheet.hljs, {
        width: '100%',
        height: '100%',
        backgroundColor: backgroundColor || stylesheet.hljs.background,
        // Prevents YGValue error
        padding: 0,
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding
      }],
      ref: forwardedRef,
      scrollEnabled: scrollEnabled
    }, showLineNumbers && renderLineNumbersBackground(), renderNode(rows));
  };

  return /*#__PURE__*/React.createElement(Highlighter, _extends({}, highlighterProps, {
    customStyle: {
      padding: 0
    },
    CodeTag: View,
    PreTag: View,
    renderer: nativeRenderer,
    style: stylesheet
  }));
};

const SyntaxHighlighterWithForwardRef = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement(SyntaxHighlighter, _extends({}, props, {
  forwardedRef: ref
})));
export default SyntaxHighlighterWithForwardRef;
//# sourceMappingURL=SyntaxHighlighter.js.map