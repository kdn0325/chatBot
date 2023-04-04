import React, { useEffect, useRef, useState } from "react";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { View, Text, StyleSheet, Image, BackHandler, Alert, Platform } from "react-native";
import { Linking } from "react-native";
import axios from "axios";
import { Container } from "native-base";
import { NavigationProp } from "@/types";

// 패스 연동
const Verification = ({navigation,className}: NavigationProp) => {
  const BASE_URL =
    "http://ec2-13-125-253-143.ap-northeast-2.compute.amazonaws.com:4512/phone_popup2.jsp";
  const wvRef = useRef(null);

  const handlePressBack = () => {
    if (navigation.canGoBack()) {
      Alert.alert(
        '중단', // 제목
        '모든 정보가 사라집니다. 회원가입을 중단하시겠습니까?', // 설명
        [ // 버튼 추가
          {
            text: '확인',
            style: 'destructive', // 버튼 스타일 지정
            onPress: () => {  // 버튼 콜백함수 지정
                navigation.popToTop();
            },
          },
          {text: '취소', style: 'cancel'}, 
        ],
        { // 옵션 추가
          cancelable: true, // 취소 버튼 활성화
        }, 
      );
    }else{
        navigation.popToTop()
    }
    return true
  }
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handlePressBack)
    }
  }, [handlePressBack])

  const onShouldStartLoadWithRequest = (event:any) => {
    if (
      event.url.startsWith("http") ||
      event.url.startsWith("https") ||
      event.url.startsWith("intent") ||
      event.url.startsWith("about:blank")
    ) {
      return true;
    }
    if (Platform.OS === "android") {
      const SendIntentAndroid = require("react-native-send-intent");
      SendIntentAndroid.openChromeIntent(event.url)
        .then((isOpened:any) => {
          if (!isOpened) {
            Alert.alert("앱 실행이 실패했습니다");
          }
        })
        .catch((err:any) => {
          console.log(err);
        });

      return false;
    } else {
      Linking.openURL(event.url).catch((err) => {
        Alert.alert(
          "앱 실행이 실패했습니다. 설치가 되어있지 않은 경우 설치하기 버튼을 눌러주세요."
        );
      });
      return false;
    }
  };

  const [data, setData] = useState<any>("");
  const [dataChange, setDataChange] = useState<any>("");
  const [dataChange1, setDataChange1] = useState<any>("");
  const [statusNum, setStatusNum] = useState<string>("1");

  const token: any = [];

  const INJECTED_JAVASCRIPT = `(function() {
      const tokenLocalStorage = window.localStorage.getItem('result');
      window.ReactNativeWebView.postMessage(tokenLocalStorage);
    })();`;

  useEffect(() => {
    console.log("token", token);
  }, [data]);

  const onMessage = (payload: WebViewMessageEvent) => {
    if (payload !== null) {
      setData(JSON.parse(payload.nativeEvent.data));
      setDataChange1(JSON.parse(dataChange));
    }
  };


  useEffect(() => {
      // console.log("data?",data)
      let verifi = data && data.RSLT_MSG;
      console.log("본인인증 완료 체크한다", data && data.RSLT_MSG);
      if(data){

        const verifiValue ={
          "data_ci" : data.CI,
          "data_di" : data.DI,
        }
        const verifiFinish = async () => {
          console.log("verifiValue?",verifiValue);
          try {
            if(verifi === "본인인증 완료"){
              navigation.replace("CredentialsEmail", {
                phone: data.TEL_NO,
                name: data.RSLT_NAME,
                CI:data.CI,
                DI:data.DI,
              });
              clearInterval(id);
            }else{
              console.log("로그인 화면으로 돌아감")
              navigation.replace("Login")
            }
          
          }catch (err) {
            console.log("error:: ", err);
          }
          clearInterval(id);
        }
        const id = setInterval(() => {
          console.log('타이머 돌아가는중...');
          verifiFinish(); // <-- (3) invoke in interval callback
        }, 1000);
        return () => {
        clearInterval(id);
        console.log('타이머가 종료되었습니다.'); }
      }
  }, [data]);


  return (
    // <Container>
      <WebView
        androidHardwareAccelerationDisabled
        ref={wvRef}
        source={{ uri: BASE_URL }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={onMessage}
        javaScriptEnabled={true}
        onNavigationStateChange={(e) => {
          console.log("current state is ", setDataChange(JSON.stringify(e, null, 2)));
          /* put your comdition here based here and close webview.
           Like if(e.url.indexOf("end_url") > -1)
          Then close webview
          */
        }}
        onShouldStartLoadWithRequest={(event) => {
          return onShouldStartLoadWithRequest(event);
        }}
        onLoadEnd={() => console.log("")}
      />
    // </Container>
  );
};

export default Verification;
