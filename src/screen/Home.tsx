import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../navigation";

export const HomeScreenName = "Home" as const;
type HomeScreenProps = NativeStackScreenProps<
  StackParamList,
  typeof HomeScreenName
>;

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to HeaderlessScreen"
        onPress={() => navigation.navigate("Headerless")}
      />
      <Button
        title="Go to Jane's Profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button
        title="Go to Mika's Profile"
        onPress={() => navigation.navigate("Profile", { name: "Mika" })}
      />
    </View>
  );
};
