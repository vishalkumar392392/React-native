import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameover, setGameOver] = useState(true);
  const [guessNumber, setGuessNumber] = useState(0);

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessNumber(0);
  };

  const [fontsLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoading) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pikednumber) => {
    setUserNumber(pikednumber);
    setGameOver(false);
  };
  const handleSetGameOver = (totalGuesses) => {
    setGameOver(true);
    setGuessNumber(totalGuesses);
  };
  const screen = () => {
    if (gameover && userNumber) {
      return (
        <GameOverScreen
          roundsNumber={guessNumber}
          userNumber={userNumber}
          onStartNewGame={startNewGameHandler}
        />
      );
    }
    if (userNumber) {
      return <GameScreen number={userNumber} setGameOver={handleSetGameOver} />;
    } else {
      return <StartGameScreen onPickedNumber={pickedNumberHandler} />;
    }
  };

  return (
    <>
      <StatusBar style="light" />
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
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  image: {
    opacity: 0.15,
  },
});
