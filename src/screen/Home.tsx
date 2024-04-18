import { Text, YStack } from "tamagui";

export const HomeScreenName = "Home" as const;

export const HomeScreen = () => {
  return (
    <YStack
      fullscreen
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={8}
    >
      <Text fontSize={"$10"}>ホーム</Text>
    </YStack>
  );
};
