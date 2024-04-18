import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { LoginScreen, LoginScreenName } from "../screen/Login";
import { ExploreScreen, ExploreScreenName } from "../screen/Explore";
import {
  ExploreResultScreen,
  ExploreResultScreenName,
} from "../screen/ExploreResult";
import {
  ExploreRegisterScreen,
  ExploreRegisterScreenName,
} from "../screen/ExploreRegister";
import { HomeScreen, HomeScreenName } from "../screen/Home";
import { NavBar } from "../component/NavBar";
import { IslandListScreen, IslandListScreenName } from "../screen/IslandList";

export type ScreenParamList = {
  Login: undefined;
  Home: undefined;
  Explore: undefined;
  ExploreResult: { islandId: number };
  ExploreRegister: { islandId: number };
  IslandList: undefined;
  IslandDetail: undefined;
  Account: undefined;
};

export const Stack = createNativeStackNavigator<ScreenParamList>();

export const Navigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={LoginScreenName}>
        <Stack.Screen name={HomeScreenName} component={HomeScreen} />
        <Stack.Screen name={LoginScreenName} component={LoginScreen} />
        <Stack.Screen name={ExploreScreenName} component={ExploreScreen} />
        <Stack.Screen
          name={ExploreResultScreenName}
          component={ExploreResultScreen}
        />
        <Stack.Screen
          name={ExploreRegisterScreenName}
          component={ExploreRegisterScreen}
        />
        <Stack.Screen
          name={IslandListScreenName}
          component={IslandListScreen}
        />
      </Stack.Navigator>
      {/* TODO: https://reactnavigation.org/docs/tab-based-navigation */}
      <NavBar />
    </NavigationContainer>
  );
};
