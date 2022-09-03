import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
import { GoalType } from '../models/GoalType'

interface GoalInputProps {
    onAddGoal: (enteredGoal: GoalType) => void,
    closeModal: () => void,
    showModal: boolean
}

const GoalInput = ({onAddGoal, showModal, closeModal}: GoalInputProps) => {
const [enteredGoal, setEnteredGoal] = useState<GoalType>({text: '', key: ''})
const goalInputHandler = (value: string) => {
    setEnteredGoal({key: Math.random().toString(), text: value})
}
  return (
    <Modal visible={showModal} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textContainer}
          placeholder="Your goal for this 2022"
          onChangeText={goalInputHandler}
          value={enteredGoal.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal({ key: "", text: "" });
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
  
const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      padding: 16
    },
    textContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#808080',
      width: '80%',
      padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,

    }
  });
  
export default GoalInput