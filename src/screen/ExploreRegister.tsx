import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamList } from "../navigation";
import {
  Button,
  Circle,
  ScrollView,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import { isLandList } from "../island";
import { useState } from "react";
import { RegisterCompletedDialog } from "../component/RegisterCompletedDialog";

export const ExploreRegisterScreenName = "ExploreRegister" as const;
type Props = NativeStackScreenProps<
  ScreenParamList,
  typeof ExploreRegisterScreenName
>;

export const ExploreRegisterScreen = ({ navigation, route }: Props) => {
  const [isOpenRegisterCompletedDialog, setIsOpenRegisterCompletedDialog] =
    useState(false);

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
      <Text fontSize={"$12"}>{island.name}</Text>
      <ScrollView>
        <YStack gap={12} padding={8}>
          <View>
            <Text fontSize={"$8"}>設定項目A</Text>
            <Circle size={100} backgroundColor={"$color"} />
          </View>
          <View>
            <Text fontSize={"$8"}>設定項目B</Text>
            <Circle size={100} backgroundColor={"$color"} />
          </View>
          <View>
            <Text fontSize={"$8"}>設定項目C</Text>
            <Circle size={100} backgroundColor={"$color"} />
          </View>
          <View>
            <Text fontSize={"$8"}>設定項目D</Text>
            <Circle size={100} backgroundColor={"$color"} />
          </View>

          <Button onPress={() => setIsOpenRegisterCompletedDialog(true)}>
            登録する
          </Button>
          <Button themeInverse onPress={() => navigation.goBack()}>
            キャンセル
          </Button>
        </YStack>
        <RegisterCompletedDialog
          isOpen={isOpenRegisterCompletedDialog}
          onClose={() => setIsOpenRegisterCompletedDialog(false)}
          backToSearchResult={() =>
            navigation.navigate("ExploreResult", {
              islandId: island.id,
            })
          }
          toHome={() => navigation.navigate("Home")}
        />
      </ScrollView>
    </YStack>
  );
};
