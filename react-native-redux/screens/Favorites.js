import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

const Favorites = () => {
  const favoriteMealIds = useSelector((state) => state.favoriteMealsReducer);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.ids.includes(meal.id)
  );
  const Output = () => {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  };
  return favoriteMeals.length === 0 ? (
    <Output />
  ) : (
    <MealsList items={favoriteMeals} />
  );
};

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
