import "@tamagui/core/reset.css";

import { Navigation } from "./src/navigation";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import tamaguiConfig from "./tamagui.config";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <TamaguiProvider
        config={tamaguiConfig}
        defaultTheme={colorScheme?.toString()}
      >
        <Theme name="green">
          <Navigation />
        </Theme>
      </TamaguiProvider>
    </ThemeProvider>
  );
}
