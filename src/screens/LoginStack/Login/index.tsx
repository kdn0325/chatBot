import React, { useState } from "react";
import {
  ButtonContainer,
  CheckText,
  CloseImage,
  ContentArea,
  CustomerService,
  EyesImage,
  FooterArea,
  HeadArea,
  InputContainer,
  LoginCheck,
  LoginContainer,
  LoginRetain,
  LogoContainer,
  MainLogo,
  TabContainer,
  TabText,
  TouchButton,
} from "./styles";
import { getLogin } from "@/utils/apiClient";
import Container from "@/layout";
import Input from "@/components/Input";
import ButtonBox from "@/components/ButtonBox";
import Eyes from "@/assets/img/Eyes.png";
import Clear from "@/assets/img/Clear.png";
import Logo from "@/assets/img/Logo.png";
import { NavigationProp } from "@/types";
import theme from "@/styles/theme";
import { GlobalText } from "@/styles/global";

const Login = ({ navigation }: NavigationProp) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  /* 비밀번호 보이기 / 숨기기 */
  const [showPwd, setShowPwd] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const onToggle = () => {
    setChecked(!checked);
  };
  const toggleClick = () => {
    setShowPwd(!showPwd);
  };

  /* ---------------------------------------------SignIn--------------------------------------------- */

  const pressHandler = async () => {
    navigation.navigate("CoreStack");
  };

  return (
    <Container>
      <HeadArea>
        <GlobalText>ChatBot</GlobalText>
      </HeadArea>
      <ContentArea>
        <LoginContainer>
          <InputContainer>
            <Input
              title="이메일 입력"
              value={username}
              onChange={setUsername}
              secureTextEntry={false}
            />
            <TouchButton onPress={() => setUsername("")}>
              <CloseImage source={Clear} />
            </TouchButton>
          </InputContainer>
          <InputContainer>
            <Input
              title="패스워드 입력"
              value={password}
              onChange={setPassword}
              secureTextEntry={showPwd ? true : false}
            />
            <TouchButton onPress={() => toggleClick()}>
              <EyesImage source={Eyes} />
            </TouchButton>
          </InputContainer>
        </LoginContainer>
        <ButtonContainer>
          <ButtonBox
            title="로그인"
            disabled={
              username.length === 0 || password.length === 0 ? true : false
            }
            color={
              username.length === 0 || password.length === 0
                ? theme.COLORS.BG_GRAY2
                : theme.COLORS.BLUE1
            }
            fontColor={
              username.length === 0 || password.length === 0
                ? theme.COLORS.GRAY1
                : theme.COLORS.WHITE
            }
            pressHandler={pressHandler}
          />
        </ButtonContainer>
        <TabContainer></TabContainer>
      </ContentArea>
      <FooterArea>
        <CustomerService onPress={() => navigation.navigate("RegisterStack")}>
          회원가입
        </CustomerService>
      </FooterArea>
    </Container>
  );
};

export default Login;
