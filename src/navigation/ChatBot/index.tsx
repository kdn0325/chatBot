import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { NavigateScreens, NavigationProp } from "@/types";
import ChatBotHome from "@/screens/ChatBotStack/ChatBotHome";

const ChatBotStack = createStackNavigator();
const ChatBotStackNavigator = () => {
  return (
    <ChatBotStack.Navigator initialRouteName={"ChatBotStack"}>
      <ChatBotStack.Screen
        name={NavigateScreens.ChatBotHome}
        component={ChatBotHome}
        options={{ headerShown: false }}
      />
    </ChatBotStack.Navigator>
  );
};

export default ChatBotStackNavigator;
