import React from 'react';
import { ScrollView, ColorValue } from 'react-native';
import { SyntaxHighlighterProps as HighlighterProps } from 'react-syntax-highlighter';
import * as HLJSSyntaxStyles from 'react-syntax-highlighter/dist/esm/styles/hljs';
export declare type SyntaxHighlighterStyleType = {
    /**
     * Default is Menlo-Regular (iOS) and Monospace (Android).
     */
    fontFamily?: string;
    /**
     * Default is 16.
     */
    fontSize?: number;
    /**
     * Override the syntax style background.
     */
    backgroundColor?: ColorValue;
    /**
     * Default is 16.
     */
    padding?: number;
    /**
     * Text color of the line numbers.
     */
    lineNumbersColor?: ColorValue;
    /**
     * Background color of the line numbers.
     */
    lineNumbersBackgroundColor?: ColorValue;
    /**
     * Use this property to align the syntax highlighter text with the text input.
     */
    highlighterLineHeight?: number;
    /**
     * Use this property to help you align the syntax highlighter text with the text input.
     * Do not use in production.
     */
    highlighterColor?: ColorValue;
};
export declare const SyntaxHighlighterSyntaxStyles: typeof HLJSSyntaxStyles;
export declare type SyntaxHighlighterProps = HighlighterProps & {
    /**
     * Code to display.
     */
    children: string;
    /**
     * Syntax highlighting style.
     * @See https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_HLJS.MD
     */
    syntaxStyle?: typeof SyntaxHighlighterSyntaxStyles;
    /**
     * Extra styling options for the syntax highlighter.
     */
    addedStyle?: SyntaxHighlighterStyleType;
    /**
     * Whether to allow scrolling on the syntax highlighter.
     */
    scrollEnabled?: boolean;
};
declare const SyntaxHighlighterWithForwardRef: React.ForwardRefExoticComponent<Pick<SyntaxHighlighterProps, keyof HighlighterProps> & React.RefAttributes<ScrollView>>;
export default SyntaxHighlighterWithForwardRef;
