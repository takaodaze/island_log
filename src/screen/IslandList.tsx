import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList } from "../navigation";
import { Button, YStack } from "tamagui";
import { myIslandList } from "../island";

export const IslandListScreenName = "IslandList" as const;
type Props = NativeStackScreenProps<
  ScreenParamList,
  typeof IslandListScreenName
>;

export const IslandListScreen = ({ navigation }: Props) => {
  return (
    <YStack fullscreen flex={1} gap={8} padding={8}>
      {myIslandList.map((island) => (
        <Button
          key={island.id}
          onPress={() =>
            navigation.navigate("ExploreRegister", {
              islandId: island.id,
            })
          }
        >
          {island.name}
        </Button>
      ))}
    </YStack>
  );
};
