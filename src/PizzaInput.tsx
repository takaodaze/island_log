import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export const PizzaInput = () => {
  const [text, setText] = useState("");

  const pizzas = text
    .split(" ")
    .map(() => "🍕")
    .join(" ");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(t) => {
          setText(t);
        }}
        style={styles.input}
      />
      <Text style={{ fontSize: 20 }}>{pizzas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    padding: 10,
    borderRadius: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
  },
});
