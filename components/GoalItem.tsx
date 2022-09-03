import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { GoalType } from "../models/GoalType";

interface GoalItemProps {
  goal: GoalType;
  onRemoveGoal: (goalToRemove: GoalType) => void;
}
const GoalItem = ({ goal, onRemoveGoal }: GoalItemProps) => {
  return (
    <View style={styles.singleGoalContainer}>
      <Pressable onPress={() => onRemoveGoal(goal)} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.singleGoalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  singleGoalContainer: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  singleGoalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5
  }
});

export default GoalItem;
