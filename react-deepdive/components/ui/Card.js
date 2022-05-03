import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
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
});
