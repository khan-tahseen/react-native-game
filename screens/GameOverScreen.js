import { View, StyleSheet, Image } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen() {
  return (
    <View style={styles.root}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/gameOver.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: Colors.primary500,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
