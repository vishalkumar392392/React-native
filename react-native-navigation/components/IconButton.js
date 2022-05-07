import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const IconButton = ({ onPress }) => {
  const [pressed, setPressed] = useState(false);

  const pressHandler = () => {
    setPressed(!pressed);
    onPress();
  }
  return (
    <Pressable onPress={pressHandler}>
      {pressed ? (
        <Ionicons name="star" size={24} color="white" />
      ) : (
        <Ionicons name="star-outline" size={24} color="white" />
      )}
    </Pressable>
  );
};

export default IconButton;
