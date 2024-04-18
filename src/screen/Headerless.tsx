import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../navigation";

export const HeaderlessScreenName = "Headerless" as const;
type HeaderlessScreenProps = NativeStackScreenProps<
  StackParamList,
  typeof HeaderlessScreenName
>;
export const HeaderlessScreen = (props: HeaderlessScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Headerless Screen</Text>
      <Text>{props.route.name}</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};
