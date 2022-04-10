import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";
import GoalItem from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

import {StatusBar} from "expo-status-bar"

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  const buttonChangeHandler = (goal) => {
    if (goal.length === 0) return;
    setCourseGoal((currentGoals) => [
      ...currentGoals,
      { id: uuid.v4(), goal: goal },
    ]);
    setModalIsVisible(!modalIsVisible);
  };
  const deleteHandler = (item) => {
    setCourseGoal((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== item.id)
    );
  };
  const onCancel = () => {
    setModalIsVisible(!modalIsVisible);
  };
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add Goal"
          color="#5e0acc"
          onPress={() => setModalIsVisible(!modalIsVisible)}
        />
        <GoalInput
          buttonChangeHandler={buttonChangeHandler}
          visible={modalIsVisible}
          cancel={onCancel}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} deleteHandler={deleteHandler} />
            )}
            keyExtractor={(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },
  goalsContainer: {
    flex: 5,
  },
});
