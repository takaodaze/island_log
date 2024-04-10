import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [length, setLength] = useState(1);

  const handleChange = (text: string) => {
    const maybeInt = parseInt(text);
    if (isNaN(maybeInt)) {
      setLength(0);
      return;
    }
    setLength(maybeInt);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={length.toString()}
        onChangeText={(t) => {
          handleChange(t);
        }}
      />
      {new Array(length).fill(null).map((_, i) => (
        <View key={`sample-${i}`}>
          <Text>Hello World!</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
