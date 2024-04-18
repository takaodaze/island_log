import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { HomeScreen, HomeScreenName } from "../screen/Home";
import { ProfileScreen, ProfileScreenName } from "../screen/Profile";
import { HeaderlessScreen, HeaderlessScreenName } from "../screen/Headerless";

export type StackParamList = {
  Home: undefined;
  Headerless: undefined;
  Profile: { name: string };
};
export const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={HomeScreenName}>
        <Stack.Screen
          name={HomeScreenName}
          component={HomeScreen}
          options={{
            title: "Welcome",
          }}
        />
        <Stack.Screen
          name={ProfileScreenName}
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name={HeaderlessScreenName}
          component={HeaderlessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
