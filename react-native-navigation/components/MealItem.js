import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export default MealItem = ({ item }) => {
  const { title, imageUrl, affordability, complexity, duration } = item;
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          pressed ? styles.buttonPressed : null
        ]}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4, // For ANDROID
    shadowColor: "black", // FOR IOS
    shadowOpacity: 0.25, // FOR IOS
    shadowOffset: { width: 0, height: 2 }, // FOR IOS
    shadowRadius: 8, // FOR IOS,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //FOR IOS overflow should be hidden to see shawdow
  },
  buttonPressed: {
    opacity: 0.5, // FOR IOS android_ripple effect is not present so we are using opacity
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
