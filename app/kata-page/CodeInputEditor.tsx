import { View, Text, Button, Pressable } from "react-native";
import { useState } from "react";
import { useKeyboard } from "@react-native-community/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor";
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
    "\n}";
  const [code, setCode] = useState(formattedTemplate);

  return (
    <View>
      <View style={styles.keyWordButtons}>
        <Button title="const" onPress={() => {return setCode((currentCode) => {
          console.log(code);
          return currentCode + "const"
        })}}/>
      </View>
      <View style={styles.codeEditor}>
        <CodeEditor
          style={getEditorStyle()}
          language="javascript"
          syntaxStyle={CodeEditorSyntaxStyles.atomOneDark}
          initialValue={code}
          showLineNumbers
          onChange={(data) => setCode(data || "")} // data is intitalised as undefined so || is needed!
        />
      </View>
      <View style={styles.submitButton}>
        <Button title="Submit" onPress={() => setInput(code)} />
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