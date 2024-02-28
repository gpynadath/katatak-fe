import Header from "components/Header";
import KataList from "components/KataList";
import FilterManager from "components/FilterManager";
import { ScrollView, Text, View } from "react-native";
import { useContext, useState } from "react";
import CurrentUserContext from "app/context/UserContext";
import { styles } from "../kata-page/KataPageStyleSheet";

export default function Page() {
  const currentUser = useContext(CurrentUserContext);
  const [topicsValue, setTopicsValue] = useState<string>("");
  const [orderValue, setOrderValue] = useState<string>("");
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={styles.homePageScrollContainer}
    >
      <>
        <Header />
        <FilterManager
          topicsValue={topicsValue}
          setTopicsValue={setTopicsValue}
          orderValue={orderValue}
          setOrderValue={setOrderValue}
        />
      </>
      <KataList topicsValue={topicsValue} orderValue={orderValue} />
    </ScrollView>
  );
}
