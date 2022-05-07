import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoriteSlice";

export default MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { duration, complexity, affordability } = selectedMeal;

  const favoriteMealIds = useSelector((state) => state.favoriteMealsReducer);

  const mealIsFavorite = favoriteMealIds.ids.includes(mealId);

  const dispatch = useDispatch();

  const headerButtonPressHandler = () => {
    mealIsFavorite
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            mealIsFavorite={mealIsFavorite}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
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
    color: "white",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
