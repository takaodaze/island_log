import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList } from "../navigation";
import { Button, YStack } from "tamagui";
import { FC } from "react";
import { isLandList } from "../island";

export const ExploreScreenName = "Explore" as const;
type ExploreScreenProps = NativeStackScreenProps<
  ScreenParamList,
  typeof ExploreScreenName
>;

export const ExploreScreen: FC<ExploreScreenProps> = ({ navigation }) => {
  return (
    <YStack fullscreen gap={8} padding={8}>
      {isLandList.map((island) => (
        <Button
          key={`islang_${island.id}`}
          onPress={() =>
            navigation.navigate("ExploreResult", {
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
