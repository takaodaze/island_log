import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList } from "../navigation";
import { Button, View } from "tamagui";
import { FC } from "react";

export const LoginScreenName = "Login" as const;
type LoginScreenProps = NativeStackScreenProps<
  ScreenParamList,
  typeof LoginScreenName
>;

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View
      height={"100%"}
      flex={1}
      alignItems="center"
      justifyContent="center"
      gap={8}
    >
      <Button onPress={() => navigation.navigate("Home")}>ログイン</Button>
    </View>
  );
};
