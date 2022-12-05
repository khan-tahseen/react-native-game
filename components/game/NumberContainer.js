import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Colors.primary500,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 36,
    color: Colors.primary500,
  }, 
});
