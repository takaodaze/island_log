import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";

type StackParamList = {
  Home: undefined;
  Headerless: undefined;
  Profile: { name: string };
};
const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
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
}

const HomeScreenName = "Home" as const;
type HomeScreenProps = NativeStackScreenProps<
  StackParamList,
  typeof HomeScreenName
>;
const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to HeaderlessScreen"
        onPress={() => navigation.navigate("Headerless")}
      />
      <Button
        title="Go to Jane's Profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button
        title="Go to Mika's Profile"
        onPress={() => navigation.navigate("Profile", { name: "Mika" })}
      />
    </View>
  );
};

const HeaderlessScreenName = "Headerless" as const;
type HeaderlessScreenProps = NativeStackScreenProps<
  StackParamList,
  typeof HeaderlessScreenName
>;
const HeaderlessScreen = (props: HeaderlessScreenProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Headerless Screen</Text>
      <Text>{props.route.name}</Text>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

const ProfileScreenName = "Profile" as const;
type ProfileScreenProps = NativeStackScreenProps<StackParamList, "Profile">;
const ProfileScreen: FC<ProfileScreenProps> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is {route.params.name}&apos;s profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
