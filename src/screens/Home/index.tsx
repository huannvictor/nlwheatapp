import React from "react";
import { View } from "react-native";

import { Header } from "../../components/header";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
