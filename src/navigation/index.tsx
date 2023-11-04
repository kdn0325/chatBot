import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { NavigateScreens, NavigationProp } from "@/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import COLORS from "@/styles/theme";
import { useEffect, useState } from "react";

import CredentialsEmail from "@/screens/SignupStack/CredentialsEmail";
import CredentialsPw from "@/screens/SignupStack/CredentialsPw";
import SignupSuccess from "@/screens/SignupStack/SignupSuccess";

import Login from "@/screens/LoginStack/Login";
import ChatBotStackNavigator from "./ChatBot";

/* 기본 테마 */
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const TabNavigationOptions = {
  tabBarActiveTintColor: COLORS.COLORS.BLUE1,
  tabBarInactiveTintColor: COLORS.COLORS.GRAY1,
  headerShown: false,
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: COLORS.FONTS.POPPINSMEDIUM,
    marginTop: 6,
  },
  tabBarStyle: {
    height: 78,
    paddingTop: 12,
    paddingBottom: 26,
  },
  unmountOnBlur: true,
};

const navigationRoute = {
  id: 1,
  name: "WalletStack",

  inactiveIcon: require("@assets/navigation/Home.svg"),
  activeIcon: require("@assets/navigation/Home_Active.svg"),
};

const RegisterStack = createStackNavigator();

const RegisterStackNavigator = () => {
  return (
    <RegisterStack.Navigator initialRouteName={"RegisterStack"}>
      <RegisterStack.Screen
        name={NavigateScreens.CredentialsEmail}
        component={CredentialsEmail}
        options={{ title: "회원가입" }}
      />
      <RegisterStack.Screen
        name={NavigateScreens.CredentialsPw}
        component={CredentialsPw}
        options={{ title: "회원가입" }}
      />
      <RegisterStack.Screen
        name={NavigateScreens.SignupSuccess}
        component={SignupSuccess}
        options={{ headerShown: false }}
      />
    </RegisterStack.Navigator>
  );
};

const LoginStack = createStackNavigator();
const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator initialRouteName={"로그인"}>
      <LoginStack.Screen
        name={NavigateScreens.Login}
        component={Login}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const CoreStackNavigator = ({ navigation, route }: NavigationProp) => {
  return (
    <Tab.Navigator
      initialRouteName={"CoreStack"}
      screenOptions={TabNavigationOptions}
    >
      <Tab.Screen
        name={"ChatBot"}
        component={ChatBotStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? navigationRoute.activeIcon
                  : navigationRoute.inactiveIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppStack = createStackNavigator();

const ChatBotStack = ({ onReady }) => {
  return (
    <NavigationContainer theme={MyTheme} onReady={onReady}>
      <AppStack.Navigator initialRouteName={"MainStack"}>
        <AppStack.Screen
          name={"로그인"}
          component={LoginStackNavigator}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name={"CoreStack"}
          component={CoreStackNavigator}
          options={{ headerShown: false }}
        />
        {/* // 토큰 없으면 LoginStack 플로우 */}
        <AppStack.Screen
          name={"RegisterStack"}
          component={RegisterStackNavigator}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default ChatBotStack;
