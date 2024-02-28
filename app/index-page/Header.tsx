import { View, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "../index-page/indexPageStylesheet";
import katatakLogo from "../../assets/katatak_logo.png";

export default function Header() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image source={katatakLogo} style={styles.katatakLogo} />
      </View>
    </View>
  );
}
