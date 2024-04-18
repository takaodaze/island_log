import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList } from "../navigation";
import { Button, Text, XStack, YStack } from "tamagui";
import { FC, useState } from "react";
import { isLandList } from "../island";
import { Heart, Plus } from "@tamagui/lucide-icons";
import { FavoriteCompletedDialog } from "../component/FavoriteCompletedDialog";

export const ExploreResultScreenName = "ExploreResult" as const;
type Props = NativeStackScreenProps<
  ScreenParamList,
  typeof ExploreResultScreenName
>;

export const ExploreResultScreen: FC<Props> = ({ navigation, route }) => {
  const [isOpenFavoriteDialog, setIsOpenFavoriteDialog] = useState(false);
  const island = isLandList.find(
    (island) => island.id === route.params.islandId,
  );
  if (!island) {
    return (
      <XStack>
        <Text>島が見つかりません</Text>
      </XStack>
    );
  }
  return (
    <YStack height={"100%"} padding={8}>
      <Text fontSize={"$10"}>{island.name}</Text>
      <YStack flexGrow={1} gap={8} justifyContent="center">
        <Button
          iconAfter={Heart}
          onPress={() => {
            setIsOpenFavoriteDialog(true);
          }}
        >
          気になる島リストに登録
        </Button>
        <Button
          iconAfter={Plus}
          onPress={() =>
            navigation.navigate("ExploreRegister", {
              islandId: island.id,
            })
          }
        >
          島を記録する
        </Button>
      </YStack>
      <FavoriteCompletedDialog
        isOpen={isOpenFavoriteDialog}
        onClose={() => setIsOpenFavoriteDialog(false)}
      />
    </YStack>
  );
};
