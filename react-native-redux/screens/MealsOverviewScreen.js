import { useEffect, useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  return <MealsList items={displayedMeals} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
