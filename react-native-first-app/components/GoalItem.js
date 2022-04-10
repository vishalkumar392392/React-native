import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ itemData, deleteHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={deleteHandler.bind(this, itemData.item)}
        style={({ pressed }) => pressed && styles.pressedItem} // For IOS purpose, no need for Android
      >
        <Text style={styles.goalText}>{itemData.item.goal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    color: "white",
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
