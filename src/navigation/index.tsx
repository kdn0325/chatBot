import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigateScreens, NavigationProp } from '@/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform, Image } from 'react-native'
import { DefaultTheme, getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import COLORS from '@/styles/theme';
import { useEffect, useState } from 'react';
import * as SplashScreen from "expo-splash-screen";
import CredentialsEmail from '@/screens/SignupStack/CredentialsEmail';
import CredentialsPw from '@/screens/SignupStack/CredentialsPw';
import SignupSuccess from '@/screens/SignupStack/SignupSuccess';
import Certification from '@/screens/SignupStack/Certification';
import Login from '@/screens/LoginStack/Login';
import ChatBotStackNavigator from './ChatBot';



// const config = {
//     animation: 'spring',
//     config: {
//       stiffness: 1000,
//       damping: 500,
//       mass: 3,
//       overshootClamping: true,
//       restDisplacementThreshold: 0.01,
//       restSpeedThreshold: 0.01,
//     },
// };


/* 기본 테마 */
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background:'#fff',
    },
};




const TabNavigationOptions = {
    tabBarActiveTintColor: COLORS.COLORS.BLUE1,
    tabBarInactiveTintColor: COLORS.COLORS.GRAY1,
    headerShown:false,
    tabBarLabelStyle: {
        fontSize:12,
        fontFamily: COLORS.FONTS.POPPINSMEDIUM,
        marginTop:6,
    },
    tabBarStyle:{
        height:78,
        paddingTop:12,
        paddingBottom:26,
    },
    unmountOnBlur: true
};

const navigationRoute = 
    {   
        id:1,
        name: "WalletStack",
        // component: CoreStackNavigator,
        inactiveIcon: require("../assets/navigation/Home.svg"),
        activeIcon: require("../assets/navigation/Home_Active.svg"),
    };



const screenOptions: StackNavigationOptions = {
    headerMode:'float',
    headerStyle: {
        backgroundColor: COLORS.COLORS.WHITE,
    },
    headerTitleAlign:'center',
    headerTitleStyle: {
        fontFamily: COLORS.FONTS.NANUMSQUARE_700,
        fontSize:16,
    },
    headerShadowVisible:false,
    // transitionSpec: {
    //     open: config,
    //     close: config,
    // },
    // // presentation: 'modal',
    // animationTypeForReplace: 'push',
    // animation:'slide_from_right'
    
};


const RegisterStack = createStackNavigator();

const RegisterStackNavigator = () => {
    return (
        <RegisterStack.Navigator initialRouteName={"RegisterStack"}>
            <RegisterStack.Screen name={NavigateScreens.Certification} component={Certification} options={{headerShown: false}}  />
            <RegisterStack.Screen name={NavigateScreens.CredentialsEmail} component={CredentialsEmail} options={{title: 'Chatbot 회원가입'}}/>
            <RegisterStack.Screen name={NavigateScreens.CredentialsPw} component={CredentialsPw} options={{title: 'Chatbot 회원가입'}}/>
            <RegisterStack.Screen name={NavigateScreens.SignupSuccess} component={SignupSuccess} options={{headerShown: false}}  />
        </RegisterStack.Navigator>
    );
}

const LoginStack = createStackNavigator();
const LoginStackNavigator = () => {
    return (
        <LoginStack.Navigator initialRouteName={"LoginStack"}>
            <LoginStack.Screen name={NavigateScreens.Login} component={Login} options={{ headerShown: false} }/>
            {/* <LoginStack.Screen name={NavigateScreens.ForgotEmail} component={ForgotEmail} options={{title: '아이디 찾기'}}/>
            <LoginStack.Screen name={NavigateScreens.ForgotPw} component={ForgotPw} options={{title: '비밀번호 찾기'}}/> */}
        </LoginStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const CoreStackNavigator = ({navigation,route}:NavigationProp) => {
    

return (
    <Tab.Navigator initialRouteName={"CoreStack"} screenOptions={TabNavigationOptions} >
        <Tab.Screen name={"ChatBot"} component={ChatBotStackNavigator} options={{tabBarIcon: ({ focused }) => (<Image source={focused ? navigationRoute.activeIcon : navigationRoute.inactiveIcon}/>)}}/>
    </Tab.Navigator>
    )
}




const AppStack = createStackNavigator();
const ChatBotStack = ({onReady}) => {
    const [token,setToken] = useState<string | undefined | null>("");
    const [loading,setLoading] = useState<boolean>(false);
    
    // let token = getStoreData('accessToken');

    // useEffect(() => {
    //     getLogin();
    // },[]);

    // const getLogin = async () => {
    //     if(await getStoreData('accessToken')!== null){
    //         setLoading(true);
    //     }
    // }


  return (
    <NavigationContainer theme={MyTheme} onReady={onReady}>
        <AppStack.Navigator initialRouteName={'MainStack'}>
            {/* <AppStack.Screen name={'WalletStack'} component={WalletStackNavigator} options={{ headerShown: false }} /> */}
            {/* // 토큰 있음, CoreStack 화면으로 */}
            <AppStack.Screen name={'LoginStack'} component={LoginStackNavigator} options={{ headerShown: false }} />
            <AppStack.Screen name={'CoreStack'} component={CoreStackNavigator} options={{ headerShown: false }} />
            {/* // 토큰 없으면 LoginStack 플로우 */}
            <AppStack.Screen name={'RegisterStack'} component={RegisterStackNavigator} options={{ headerShown: false }} />
        </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default ChatBotStack;