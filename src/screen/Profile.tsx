import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../navigation";

export const ProfileScreenName = "Profile" as const;
type ProfileScreenProps = NativeStackScreenProps<StackParamList, "Profile">;

export const ProfileScreen: FC<ProfileScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is {route.params.name}&apos;s profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
