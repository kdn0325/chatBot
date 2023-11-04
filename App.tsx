import React, { useCallback, useEffect } from "react";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components/native";
import COLORS from "@styles/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import ChatBotStack from "@/navigation";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    NanumSquareL: require("@assets/fonts/NanumSquareL.ttf"),
    NanumSquareR: require("@assets/fonts/NanumSquareR.ttf"),
    NanumSquareB: require("@assets/fonts/NanumSquareB.ttf"),
    NanumSquareEB: require("@assets/fonts/NanumSquareEB.ttf"),
    Neodgm: require("@assets/fonts/Neodgm.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={COLORS}>
      {/* <NativeBaseProvider> */}
      <ChatBotStack onReady={onLayoutRootView} />
      {/* </NativeBaseProvider> */}
    </ThemeProvider>
  );
};

export default App;
