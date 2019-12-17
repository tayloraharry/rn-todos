import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/goal-item';
import GoalInput from './components/goal-input';

interface IGoal {
  id: string;
  value: string;
}

export default function App() {
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);
  const [isAddingGoal, setIsAddingGoal] = useState<boolean>(false);

  const addGoalHandler = (enteredGoal: string) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
    setIsAddingGoal(false);
  }

  const removeGoalHandler = (goalId: string) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  const cancelGoalHandler = () => {
    setIsAddingGoal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddingGoal(true)} />
      <GoalInput
        isAddingGoal={isAddingGoal}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
