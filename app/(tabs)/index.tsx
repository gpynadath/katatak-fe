import Header from "components/Header";
import KataList from "components/KataList";
import { Text, View } from "react-native";
import { useContext } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function Page() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <View>
      <Header />
      <KataList />
    </View>
  );
}
