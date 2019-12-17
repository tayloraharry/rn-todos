import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface IGoalItemProps {
    id: string;
    title: string;
    onDelete(id: string): void;
}

const GoalItem = ({ id, title, onDelete }: IGoalItemProps) => {
    return (
        <TouchableOpacity onLongPress={ () => onDelete(id) }>
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      borderColor: 'black',
      marginVertical: 10,
      marginBottom: 10,
      borderWidth: 1,
      backgroundColor: '#ccc'
    }
  });
  