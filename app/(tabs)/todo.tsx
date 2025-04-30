import { StyleSheet, TextInput, Button, FlatList } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";

export default function TabTwoScreen() {
  const [todos, settodos] = useState<Array<Record<string, string>>>([]);
  const [input, setInput] = useState("");

  const addGoalHandler = () => {
    settodos((prev) => [
      ...prev,
      { key: Math.random().toString(), text: input },
    ]);
    setInput("");
  };

  const onChangeInputHandler = (text: string) => {
    setInput(text);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="checklist"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Add Your Goals...</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedView style={styles.inputContainer}>
          <TextInput
            placeholder="write your todo"
            value={input}
            style={styles.input}
            onChangeText={onChangeInputHandler}
          />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </ThemedView>
        <FlatList
          style={{ marginTop: 50 }}
          data={todos}
          renderItem={(itemData) => {
            return (
              <ThemedView style={styles.goalItem}>
                <ThemedText>{itemData.item.text}</ThemedText>
              </ThemedView>
            );
          }}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  input: {
    color: "#ccc",
    padding: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});
