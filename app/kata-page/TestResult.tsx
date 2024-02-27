import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";
import { styles } from "./KataPageStyleSheet";

type result = {
  pass: boolean;
  description: string;
  logs: string[];
};

export default function TestResult({ pass, description, logs }: result) {
  return (
    <>
      <View style={styles.testContainer}>
        {pass ? (
          <Image
            source={require("../../assets/tick-icon.png")}
            alt="tick icon"
            style={styles.tick_cross}
          />
        ) : (
          <Image
            source={require("../../assets/cross-icon.png")}
            alt="cross icon"
            style={styles.tick_cross}
          />
        )}
        <Text style={styles.testDescription}>{description.trim()}</Text>
      </View>
      {logs.length > 0 ? (
        <View style={styles.logsContainer}>
          <Text style={styles.testDescription}>console.logs: </Text>
          {logs.map((log: string) => {
            return (
              <Text key={Math.random()} style={styles.logText}>
                {log}
              </Text>
            );
          })}
        </View>
      ) : null}
    </>
  );
}
