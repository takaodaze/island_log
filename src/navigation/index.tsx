import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
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
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomeScreenName}
        screenOptions={{
          headerStyle: {
            backgroundColor: "tomato",
          },
        }}
      >
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
