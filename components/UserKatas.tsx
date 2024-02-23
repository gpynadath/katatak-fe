import { Text, View, StyleSheet } from "react-native";

export default function UserKatas() {
  //use effect - needs this endpoint: ADV GET /api/users/:user_id/solutions - set userKatas state
  //then pass the userKatas to KataCard(s) as value of kataData attribute.
  return (
    <View style={styles.container}>
      <Text>UserKatas placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
