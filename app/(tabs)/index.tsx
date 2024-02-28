import Header from "../index-page/Header";
import KataList from "../index-page/KataList";
import FilterManager from "../index-page/FilterManager";
import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import CurrentUserContext from "app/context/UserContext";
import { styles } from "../index-page/indexPageStylesheet";

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
