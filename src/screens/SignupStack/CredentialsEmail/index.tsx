import React, { useEffect, useState } from 'react'
import ButtonBox from '@/components/ButtonBox'
import Input from '@/components/Input'
import Container from '@/layout'
import { NavigationProp } from '@/types'
import theme from '@/styles/theme';
import {ContentArea, CreateInputContainer, FooterArea, HeadArea, HeaderTxt, InputContainer,Submit,SubmitContainer,TouchButton } from './styles'
import { Alert , BackHandler } from 'react-native'


const CredentialsEmail = ({navigation,className,route}: NavigationProp) => {

    const [emailAuth,setEmailAuth] = useState<string>("");
    const [numberAuth,setNumberAuth] = useState<string>("");
    const [nicknameInput, setNicknameInput] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    
    //Input 추가
    const [passwordInput, setPasswordInput] = useState<boolean>(false);

    const {phone} = route?.params;
    const {name} = route?.params;
    const {CI} = route?.params;
    const {DI} = route?.params;

    console.log("phone?",phone)
    console.log("name?",name)
    console.log("CI?",CI)
    console.log("DI?",DI)

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

    const toggleModal = () => {
        setModalVisible(!modalVisible);
        setPasswordInput(!passwordInput)
    };

    /* ---------------------------------------------닉네임 체크--------------------------------------------- */
    const pressHandler = async () =>{
        navigation.push('CredentialsPw',{
            email: emailAuth,
            phone:phone,
            name:name,
            CI:CI,
            DI:DI,
        })
    }




  return (
        <Container>
            
            <HeadArea>
                <HeaderTxt>이메일 입력</HeaderTxt>
            </HeadArea>
            <ContentArea>
                <InputContainer>
                    {passwordInput ? <Input title='이메일 입력' value={emailAuth} onChange={setEmailAuth} secureTextEntry={false} editable={false}/> :<Input title='이메일 입력' value={emailAuth} onChange={setEmailAuth} secureTextEntry={false} editable={true}/>}
                    {/* <TouchButton onPress={() => AuthEmailClick()}>
                        {passwordInput || <Submit>전송</Submit>}
                    </TouchButton> */}
                    {/* {passwordInput &&  */}
                        {/* <CreateInputContainer>
                            <SubmitContainer>
                                <Input title='닉네임' value={nicknameInput} onChange={setNicknameInput} secureTextEntry={false}/>
                            </SubmitContainer>
                        </CreateInputContainer> */}
                    {/* } */}
                </InputContainer>
            </ContentArea>
            <FooterArea>
                <ButtonBox title='계속' disabled={emailAuth.length === 0  ? true : false} color={emailAuth.length === 0  ? theme.COLORS.BG_GRAY2 : theme.COLORS.BLUE1} fontColor={emailAuth.length === 0 ? theme.COLORS.GRAY1 : theme.COLORS.WHITE} pressHandler={pressHandler}/>
            </FooterArea>
            {/* <Popup modalVisible={modalVisible} toggleModal={toggleModal} passwordInput={passwordInput}/> */}
        </Container>
  )
}


export default CredentialsEmail