import React from 'react';
import {ContentArea, FooterArea, HeadArea, LoadingGif, SuccessContainer, SuccessText } from './styles';
import Success from '@/assets/img/popup_icon.png';
import ButtonBox from '@/components/ButtonBox';
import Container from '@/layout';
import { NavigationProp } from '@/types';
import { getSignUp } from '@/utils/apiClient';


const SignupSuccess = ({navigation,route}:NavigationProp) => {
    const {email} = route?.params;
    const {pwd} = route?.params;
    const {phone} = route?.params;
    const {name} = route?.params;
    const {CI} = route?.params;
    const {DI} = route?.params;

    console.log("email?",email)
    console.log("pwd?",pwd)
    console.log("phone?",phone)
    console.log("name?",name)
    console.log("CI?",CI)
    console.log("DI?",DI)


    

    

    const pressHandler = async () =>{
        const userInfo = {
            'username':email,
            'password': pwd,
            'name': name,
            'phone': phone,
            'CI': CI,
            'DI': DI,
		};
        console.log("email?",email)
        console.log("pwd?",pwd)
        console.log("phone?",phone)
        console.log("name?",name)
        console.log("CI?",CI)
        console.log("DI?",DI)
        
        const res = await getSignUp(userInfo);
        console.log("res.data?",res.data.value);
        console.log("res.status?",res.status);
            if(res.data.value==='1'){
                alert("로그인 성공함");
                navigation.navigate('Login')
            }else{
                alert("로그인 실패")
            }
    }
  return (
    <Container>
        <SuccessContainer>
            <HeadArea>
                <SuccessText>회원가입이</SuccessText>
                <SuccessText>완료되었습니다.</SuccessText>
            </HeadArea>
            <ContentArea>
                <LoadingGif source={Success}/>  
            </ContentArea>
            <FooterArea>
                <ButtonBox title='완료' pressHandler={pressHandler}/>
            </FooterArea>
        </SuccessContainer>
    </Container>
  );
}

export default SignupSuccess