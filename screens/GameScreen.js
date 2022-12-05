import { View, Text, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/Colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that you are chor...", [
        { text: "sorry", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          <Text style={styles.textTitle}>Higher or Lower?</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={18} color={Colors.accent500} />
            </PrimaryButton>
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={18} color={Colors.accent500} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 16,
    color: Colors.accent500,
  },
});
