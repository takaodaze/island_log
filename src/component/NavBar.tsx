import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Home, Info, Search, StarFull } from "@tamagui/lucide-icons";
import { XStack } from "tamagui";
import { HomeScreenName } from "../screen/Home";
import { ExploreScreenName } from "../screen/Explore";
import { IslandListScreenName } from "../screen/IslandList";
import { ScreenParamList } from "../navigation";

const SIZE = 32;

export const NavBar = () => {
  const navigation = useNavigation<NavigationProp<ScreenParamList>>();

  return (
    <XStack width="100%" justifyContent="space-around" padding={12}>
      <Home size={SIZE} onPress={() => navigation.navigate(HomeScreenName)} />
      <Search
        size={SIZE}
        onPress={() => navigation.navigate(ExploreScreenName)}
      />
      <StarFull
        size={SIZE}
        onPress={() => navigation.navigate(IslandListScreenName)}
      />
      <Info size={SIZE} />
    </XStack>
  );
};
