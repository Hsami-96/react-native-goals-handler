import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
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
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          style={styles.textContainer}
          placeholder="Your goal for this 2022"
          onChangeText={goalInputHandler}
          value={enteredGoal.text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color="#f31282" />
          </View>
          <View style={styles.button}>
          <Button
              title="Add Goal"
              color="#5e0acc"
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal({ key: "", text: "" });
              }}
            />
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
      borderBottomWidth: 1,
      padding: 16,
      backgroundColor: '#311b6b'
    },
    textContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      borderRadius: 6,
      width: '80%',
      padding: 16 ,
      color: 'white'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
  });
  
export default GoalInput