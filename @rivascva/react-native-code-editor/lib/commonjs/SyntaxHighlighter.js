"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SyntaxHighlighterSyntaxStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactSyntaxHighlighter = _interopRequireDefault(require("react-syntax-highlighter"));

var HLJSSyntaxStyles = _interopRequireWildcard(require("react-syntax-highlighter/dist/esm/styles/hljs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SyntaxHighlighterSyntaxStyles = HLJSSyntaxStyles;
exports.SyntaxHighlighterSyntaxStyles = SyntaxHighlighterSyntaxStyles;

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
    fontFamily = _reactNative.Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
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

  const renderLineNumbersBackground = () => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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

        const textElement = /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
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

        const lineNumberElement = key !== '0' || index >= nodes.length - 2 ? undefined : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
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
        acc.push(showLineNumbers && lineNumberElement ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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
    return /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
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

  return /*#__PURE__*/_react.default.createElement(_reactSyntaxHighlighter.default, _extends({}, highlighterProps, {
    customStyle: {
      padding: 0
    },
    CodeTag: _reactNative.View,
    PreTag: _reactNative.View,
    renderer: nativeRenderer,
    style: stylesheet
  }));
};

const SyntaxHighlighterWithForwardRef = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/_react.default.createElement(SyntaxHighlighter, _extends({}, props, {
  forwardedRef: ref
})));

var _default = SyntaxHighlighterWithForwardRef;
exports.default = _default;
//# sourceMappingURL=SyntaxHighlighter.js.map