import { View, Text, Button, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { useKeyboard } from "@react-native-community/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor/src/CodeEditor";
import { styles } from "./KataPageStyleSheet";

export default function CodeInputEditor({
  setInput,
  function_template,
}: {
  setInput: any;
  function_template: string;
}) {
  const formattedTemplate: string =
    function_template.slice(0, function_template.indexOf("{") + 1) +
    "\n" +
    function_template.slice(
      function_template.indexOf("/"),
      function_template.length - 1
    ) +
    "\n\n}";
  const [code, setCode] = useState(formattedTemplate);
  const [value, setValue] = useState<string>(formattedTemplate);
  const [cursorPosition, setCursorPosition] = useState<number>(
    formattedTemplate.indexOf("here")
  );

  return (
    <>
      <View style={styles.codeEditor}>
        <View style={styles.keyWordButtons}>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "const " +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 6);
            }}
          >
            <Text style={styles.keywordButtonStyles}>const</Text>
          </Pressable>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "let " +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 4);
            }}
          >
            <Text style={styles.keywordButtonStyles}>let</Text>
          </Pressable>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "return " +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 7);
            }}
          >
            <Text style={styles.keywordButtonStyles}>return</Text>
          </Pressable>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "[]" +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 2);
            }}
          >
            <Text style={styles.keywordButtonStyles}>[ ]</Text>
          </Pressable>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "()" +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 2);
            }}
          >
            <Text style={styles.keywordButtonStyles}>( )</Text>
          </Pressable>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "{}" +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 2);
            }}
          >
            <Text style={styles.keywordButtonStyles}>&#123; &#125;</Text>
          </Pressable>
          <Pressable
            onPress={(event) => {
              setValue(
                value.slice(0, cursorPosition) +
                  "''" +
                  value.slice(cursorPosition, value.length)
              );
              setCursorPosition(cursorPosition + 2);
            }}
          >
            <Text style={styles.keywordButtonStyles}>"' '"</Text>
          </Pressable>
        </View>
        <CodeEditor
          style={getEditorStyle()}
          language="javascript"
          syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
          initialValue={code}
          showLineNumbers
          onChange={(data) => setValue(data)}
          value={value}
          setValue={setValue}
          setCursorPosition={setCursorPosition}
        />
      </View>
      <View>
        <Pressable onPress={() => setInput(value)}>
          <Text style={styles.submitButton}>Submit</Text>
        </Pressable>
      </View>
    </>
  );
}

function getEditorStyle() {
  const keyboard = useKeyboard();
  const insets = useSafeAreaInsets();

  return {
    ...{
      flex: 1,
      fontSize: 17,
      width: 360,
      height: 300,
      inputLineHeight: 26,
      highlighterLineHeight: 26,
    },
  };
}