import React, { useState } from "react";
import {
  ClearButton,
  ContentArea,
  FooterArea,
  HeadArea,
  HeaderTxt,
  InputContainer,
  TouchButton,
} from "./styles";
import ButtonBox from "@/components/ButtonBox";
import Input from "@/components/Input";
import Eyes from "@/assets/img/Eyes.png";
import Clear from "@/assets/img/Close.png";
import Container from "@/layout";
import { NavigationProp } from "@/types";
import { GlobalImage } from "@/styles/global";
import theme from "@/styles/theme";

const CredentialsPw = ({ route, navigation }: NavigationProp) => {
  const [enterPw, setEnterPw] = useState<string>("");
  const [reenterpw, setReenterPw] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  //Input 추가
  const [passwordInput, setPasswordInput] = useState<boolean>(false);

  /* 비밀번호 보이기 / 숨기기 */
  const [showPwd, setShowPwd] = useState<boolean>(true);

  const [loading, setLoading] = useState<boolean>(false);

  const toggleClick = () => {
    setShowPwd(!showPwd);
  };
  // const pressHandler = () =>{
  //     navigation.navigate('GoogleCode')
  // }

  const { email } = route?.params;

  const pressHandler = async () => {
    navigation.push("SignupSuccess", {
      email: email,
      pwd: enterPw,
    });
  };

  const AuthEmailClick = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setPasswordInput(!passwordInput);
  };

  return (
    <Container>
      <HeadArea>
        <HeaderTxt>비밀번호 등록</HeaderTxt>
      </HeadArea>
      <ContentArea>
        <InputContainer>
          <Input
            title="비밀번호 입력"
            value={enterPw}
            onChange={setEnterPw}
            secureTextEntry={showPwd ? true : false}
          />
          <TouchButton onPress={() => toggleClick()}>
            <GlobalImage source={Eyes} />
          </TouchButton>
          <ClearButton onPress={() => setEnterPw("")}>
            <GlobalImage source={Clear} />
          </ClearButton>
        </InputContainer>
        <InputContainer>
          <Input
            title="비밀번호 재입력"
            value={reenterpw}
            onChange={setReenterPw}
            secureTextEntry={showPwd ? true : false}
          />
          <TouchButton onPress={() => toggleClick()}>
            <GlobalImage source={Eyes} />
          </TouchButton>
          <ClearButton onPress={() => setReenterPw("")}>
            <GlobalImage source={Clear} />
          </ClearButton>
        </InputContainer>
      </ContentArea>
      <FooterArea>
        <ButtonBox
          title="계속"
          disabled={
            enterPw.length === 0 || reenterpw.length === 0 ? true : false
          }
          color={
            enterPw.length === 0 || reenterpw.length === 0
              ? theme.COLORS.BG_GRAY2
              : theme.COLORS.BLUE1
          }
          fontColor={
            enterPw.length === 0 || reenterpw.length === 0
              ? theme.COLORS.GRAY1
              : theme.COLORS.WHITE
          }
          pressHandler={pressHandler}
        />
      </FooterArea>
    </Container>
  );
};

export default CredentialsPw;
