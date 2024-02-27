import { View, Text, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
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
    <View>
      <View style={styles.keyWordButtons}></View>

      <View style={styles.codeEditor}>
        <Button
          title="const"
          onPress={(event) => {
            setValue(
              value.slice(0, cursorPosition) +
                "const " +
                value.slice(cursorPosition, value.length)
            );
            setCursorPosition(cursorPosition + 6);
          }}
        />
        <Button
          title="let"
          onPress={(event) => {
            setValue(
              value.slice(0, cursorPosition) +
                "let " +
                value.slice(cursorPosition, value.length)
            );
            setCursorPosition(cursorPosition + 4);
          }}
        />
        <Button
          title="return"
          onPress={(event) => {
            setValue(
              value.slice(0, cursorPosition) +
                "return " +
                value.slice(cursorPosition, value.length)
            );
            setCursorPosition(cursorPosition + 7);
          }}
        />
        <Button
          title="[ ]"
          onPress={(event) => {
            setValue(
              value.slice(0, cursorPosition) +
                "[]" +
                value.slice(cursorPosition, value.length)
            );
            setCursorPosition(cursorPosition + 2);
          }}
        />
        <Button
          title="( )"
          onPress={(event) => {
            setValue(
              value.slice(0, cursorPosition) +
                "()" +
                value.slice(cursorPosition, value.length)
            );
            setCursorPosition(cursorPosition + 2);
          }}
        />
        <Button
          title="{ }"
          onPress={(event) => {
            setValue(
              value.slice(0, cursorPosition) +
                "{}" +
                value.slice(cursorPosition, value.length)
            );
            setCursorPosition(cursorPosition + 2);
          }}
        />
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
      <View style={styles.submitButton}>
        <Button title="Submit" onPress={() => setInput(value)} />
      </View>
    </View>
  );
}

function getEditorStyle() {
  const keyboard = useKeyboard();
  const insets = useSafeAreaInsets();

  return {
    ...{
      fontSize: 20,
      width: 300,
      height: 300,
      inputLineHeight: 26,
      highlighterLineHeight: 26,
    },
    ...(keyboard.keyboardShown
      ? { marginBottom: keyboard.keyboardHeight - insets.bottom }
      : {}),
  };
}

// function handleKeyWordPress(value: string, code: string, setCode){
//   console.log(value)
//   console.log(code)
//   const insertedCode = code + value;
//   setCode(insertedCode);
//   console.log(code)
// }
