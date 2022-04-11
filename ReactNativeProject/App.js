import { useState } from "react";

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [goalEnteredText, setEnteredText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalsInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalEnteredText, key: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalsInputHandler}
          style={styles.textInput}
          placeholder="shopping list"
        />
        <Button onPress={addGoalHandler} title="Add product " />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalsItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 33,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    marginBottom: 24,
  },
  textInput: {
    width: "70%",
    borderColor: "grey",
    borderWidth: 1,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsItem: {
    backgroundColor: "purple",
    margin: 8,
    padding: 8,
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});
