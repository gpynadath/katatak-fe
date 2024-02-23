import Header from "components/Header";
import KataList from "components/KataList";
import { ScrollView, Text, View } from "react-native";
import { useContext, useState } from "react";
import CurrentUserContext from "app/context/UserContext";

export default function Page() {
  const currentUser = useContext(CurrentUserContext);
  const [topicsValue, setTopicsValue] = useState<string>("");
  const [orderValue, setOrderValue] = useState<string>("");
  return (
    <ScrollView>
      <Header
        topicsValue={topicsValue}
        setTopicsValue={setTopicsValue}
        orderValue={orderValue}
        setOrderValue={setOrderValue}
      />
      <KataList topicsValue={topicsValue} orderValue={orderValue} />
    </ScrollView>
  );
}
