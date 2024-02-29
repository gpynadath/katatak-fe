import Filter from "./Filter";
import { View, ImageBackground } from "react-native";
import { styles } from "./indexPageStylesheet";

type HeaderProps = {
  topicsValue: string;
  setTopicsValue: React.Dispatch<React.SetStateAction<string>>;
  orderValue: string;
  setOrderValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterManager({
  topicsValue,
  setTopicsValue,
  orderValue,
  setOrderValue,
}: HeaderProps) {
  return (
    <View style={styles.filterContainer}>
      <ImageBackground
        style={styles.bar}
        resizeMode="contain"
        source={require("../../assets/filterbar_new.png")}
      >
        <Filter
          topicsValue={topicsValue}
          setTopicsValue={setTopicsValue}
          orderValue={orderValue}
          setOrderValue={setOrderValue}
        />
      </ImageBackground>
    </View>
  );
}
