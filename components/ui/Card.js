import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

export default function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
  },
});
