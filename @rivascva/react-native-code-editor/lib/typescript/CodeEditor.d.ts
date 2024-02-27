/// <reference types="react-syntax-highlighter" />
import React from 'react';
import { TextInput, ColorValue } from 'react-native';
import { SyntaxHighlighterStyleType } from './SyntaxHighlighter';
import { Languages } from './languages';
export declare type CodeEditorStyleType = SyntaxHighlighterStyleType & {
    /**
     * Editor height.
     */
    height?: string | number;
    /**
     * Editor width.
     */
    width?: string | number;
    /**
     * Editor top margin.
     */
    marginTop?: string | number;
    /**
     * Editor bottom margin.
     */
    marginBottom?: string | number;
    /**
     * Use this property to align the text input with the syntax highlighter text.
     * @see highlighterLineHeight
     */
    inputLineHeight?: number;
    /**
     * Use this property to help you align the text input with the syntax highlighter text.
     * Do not use in production.
     * @see highlighterColor
     */
    inputColor?: ColorValue;
};
export declare const CodeEditorSyntaxStyles: typeof import("react-syntax-highlighter/dist/esm/styles/hljs");
declare type Props = {
    /**
     * Editor styles.
     */
    style?: CodeEditorStyleType;
    /**
     * Programming language to support.
     */
    language: Languages;
    /**
     * Syntax highlighting style.
     * @See https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD
     */
    syntaxStyle?: typeof CodeEditorSyntaxStyles;
    /**
     * Initial value on render.
     */
    initialValue?: string;
    /**
     * On value change.
     */
    onChange?: (newValue: string) => void;
    /**
     * On key press.
     */
    onKeyPress?: (key: string) => void;
    /**
     * Whether to show line numbers next to each line.
     */
    showLineNumbers?: boolean;
    /**
     * Make the editor read only.
     */
    readOnly?: boolean;
    /**
     * Focus the code editor on component mount.
     */
    autoFocus?: boolean;
};
declare const CodeEditorWithForwardRef: React.ForwardRefExoticComponent<Props & React.RefAttributes<TextInput>>;
export default CodeEditorWithForwardRef;
