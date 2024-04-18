import { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../navigation";
import { Button, View } from "tamagui";

export const HomeScreenName = "Home" as const;
type HomeScreenProps = NativeStackScreenProps<
  StackParamList,
  typeof HomeScreenName
>;

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View
      height={"100vh"}
      flex={1}
      alignItems="center"
      justifyContent="center"
      gap={8}
    >
      <Button onPress={() => navigation.navigate("Headerless")}>
        Home Screen
      </Button>
      <Button onPress={() => navigation.navigate("Profile", { name: "Jane" })}>
        Go to Jane&lsquo;s Profile
      </Button>
      <Button onPress={() => navigation.navigate("Profile", { name: "Mika" })}>
        Go to Mika&lsquo;s Profile
      </Button>
    </View>
  );
};
