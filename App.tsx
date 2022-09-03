import React, { useState } from "react";
import { Alert, Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { GoalType } from "./models/GoalType";

export default function App() {
  const [yearsGoals, setYearsGoals] = useState<GoalType[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const addGoalHandler = (enteredGoal: GoalType) => {
    if (enteredGoal.text === "") {
      Alert.alert("No goal has been input");
    } else {
      setYearsGoals((currentYearGoals) => [
        ...currentYearGoals,
        { key: Math.random().toString(), text: enteredGoal.text },
      ]);
    }
    setModalVisible(false)
  };

  const removeGoal = (goalToRemove: GoalType) => {
    setYearsGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal !== goalToRemove);
    });
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add new goal" color="#a065ec" onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} showModal={modalVisible} closeModal={() => setModalVisible(false)} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={yearsGoals}
          renderItem={(goal) => {
            return <GoalItem goal={goal.item} onRemoveGoal={removeGoal} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a'
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
  singleGoalContainer: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  singleGoalText: {
    color: "white",
  },
});
