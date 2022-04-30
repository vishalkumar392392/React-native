import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickedNumber }) => {
  const [number, setnumber] = useState("");
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: () => setnumber("") }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={number}
          onChangeText={(eneteredNumber) => setnumber(eneteredNumber)}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => setnumber("")}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black", //For box shadow ANDROID
    shadowOffset: { width: 0, height: 2 }, //For APPLE IOS
    shadowRadius: 6, //FOR IOS
    shadowOpacity: 0.25, //FOR IOS
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
