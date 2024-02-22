import Header from "components/Header";
import KataList from "components/KataList";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Header />
      <KataList />
    </View>
  );
}
