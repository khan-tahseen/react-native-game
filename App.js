import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

import Colors from "./constants/Colors";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.accent500, Colors.primary600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroungImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroungImage: {
    opacity: 0.15,
  },
});
