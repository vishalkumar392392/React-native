import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameover, setGameOver] = useState(true);

  const pickedNumberHandler = (pikednumber) => {
    setUserNumber(pikednumber);
    setGameOver(false);
  };
  const handleSetGameOver = () => {
    setGameOver(true);
  };
  const screen = () => {
    if (gameover && userNumber) {
      return <GameOverScreen />;
    }
    if (userNumber) {
      return <GameScreen number={userNumber} setGameOver={handleSetGameOver} />;
    } else {
      return <StartGameScreen onPickedNumber={pickedNumberHandler} />;
    }
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>{screen()}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  image: {
    opacity: 0.15,
  },
});
