import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

interface IGoalInputProps {
    isAddingGoal: boolean;
    onAddGoal(value: string): void;
    onCancel(): void;
}

const GoalInput = ({ isAddingGoal, onAddGoal, onCancel }: IGoalInputProps) => {
    const [enteredGoal, setEnteredGoal] = useState<string>('');

    const goalInputHandler = (enteredText: string | null) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={isAddingGoal} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course goal"
                    value={enteredGoal}
                    style={styles.input}
                    autoFocus={true}
                    onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Save" onPress={() => addGoalHandler()} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={() => onCancel()} color="red"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    }
});
