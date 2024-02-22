import { View, Text, Switch } from "react-native";
import React from "react";
import Filter from "./Filter";

export default function FilterToggleButton({ isEnabled, toggleSwitch }) {
  return (
    <View>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
    </View>
  );
}
