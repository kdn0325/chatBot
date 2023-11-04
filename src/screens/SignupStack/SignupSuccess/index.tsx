import React from "react";
import {
  ContentArea,
  FooterArea,
  HeadArea,
  LoadingGif,
  SuccessContainer,
  SuccessText,
} from "./styles";
import Success from "@/assets/img/popup_icon.png";
import ButtonBox from "@/components/ButtonBox";
import Container from "@/layout";
import { NavigationProp } from "@/types";
import { getSignUp } from "@/utils/apiClient";

const SignupSuccess = ({ navigation, route }: NavigationProp) => {
  const { email } = route?.params;
  const { pwd } = route?.params;

  console.log("email?", email);
  console.log("pwd?", pwd);

  const pressHandler = async () => {
    const userInfo = {
      username: email,
      password: pwd,
    };
    console.log("email?", email);
    console.log("pwd?", pwd);

    navigation.navigate("Login");
  };
  return (
    <Container>
      <SuccessContainer>
        <HeadArea>
          <SuccessText>회원가입이</SuccessText>
          <SuccessText>완료되었습니다.</SuccessText>
        </HeadArea>
        <ContentArea>
          <LoadingGif source={Success} />
        </ContentArea>
        <FooterArea>
          <ButtonBox title="완료" pressHandler={pressHandler} />
        </FooterArea>
      </SuccessContainer>
    </Container>
  );
};

export default SignupSuccess;
