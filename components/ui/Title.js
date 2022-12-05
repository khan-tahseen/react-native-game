import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    color: Colors.accent500,
    borderRadius: 4,
    padding: 8,
    backgroundColor: Colors.primary500,
  },
});
