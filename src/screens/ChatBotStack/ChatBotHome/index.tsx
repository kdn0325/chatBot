import { View, Text, SafeAreaView, FlatList, ScrollView ,ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { NavigationProp } from '@/types'
import Container from '@/layout'
import ButtonBox from '@/components/ButtonBox'
import { ContentArea, FooterArea, HeadArea, InputContainer, Submit, SubmitContainer, TouchButton } from './styles'
import { GlobalImage, GlobalText } from '@/styles/global'
import Input from '@/components/Input'
import SubmitIco from '@/assets/img/SubmitIco.png';
import Modal from 'react-native-modal'
import { getFormSubmit } from '@/utils/apiClient'
import axios from 'axios'
import Loading from '@/components/Loading'
import theme from '@/styles/theme'

// 

interface Chat {
  id: number;
  senderId: number;
  text: string;
  date: string;
}


const ChatBotHome = ({navigation}:NavigationProp) => {
    const [data,setData] = useState([]);
    const [textInput,setTextInput] = useState('');
    const [count, setCount] = useState(0);
    const [loading,setLoading] = useState(false);
    const [submitDate,setSubmitDate] = useState('');
    const [createDate,setCreateDate] = useState('');
    const flatListRef = useRef(null);
    // const txt = "오늘은 뭐 먹지?";

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     // setTextInput(Text + txt[count]); // 이전 set한 문자 + 다음 문자
    //       setCount(count + 1); // 개수 만큼 체크 
    //   }, 100);
    //   if(count === textInput.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
    //       clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    //   }
    //   return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    // })



    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

    const handleSend = async () => {
      const propmt = textInput;
      setLoading(true);
      setTextInput('');
      const res = await axios.post(apiUrl,{
        prompt:propmt,
        max_tokens:1024,
        temperature:0.5,
      },{
        headers:{
          'Content-Type':'application/json',
          "Authorization" : `Bearer ${apiKey}`
        }
      });
      const text = res.data.choices[0].text;
      console.log('res.headers.date?' ,res.headers.date)
      console.log('res.data?' ,res.data)
      setSubmitDate(Timeend(res.headers.date).toString)
      setCreateDate(Unix_timestamp(res.data.created))
      
      const curr = new Date();
      setData([...data,{type:'user','text':textInput},{type:'bot','text':text}])
      setLoading(false);
      setTextInput('');
    }

    const Unix_timestamp = (t)=> {
      var date = new Date(t*1000);
      var year = date.getFullYear();
      var month = "0" + (date.getMonth()+1);
      var day = "0" + date.getDate();
      var hour = "0" + date.getHours();
      var minute = "0" + date.getMinutes();
      // var second = "0" + date.getSeconds();
      return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" 
      // + second.substr(-2);
    }

    const Timeend = (t)=> {
      return new Date(t.getTime() + (t.getTimezoneOffset() * 60000)); 
    }
  
  



    // const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    //   if (text.length == 0) {
    //     return;
    //   }
    //   e?.preventDefault(); // 버튼을 통한 제출이라면 새로고침 방지
    //   setText("");
    // };



    // const pressHandler = async () => {
    //     const formsubmit = {
    //       'text':text,
    //     };
    //     const res = await getFormSubmit(formsubmit);
    //     console.log("formsubmit?",formsubmit);
    //     console.log("text?",text);
    //     console.log("res.data 결과값 도출?",res.data);
    // };
    

//     tI7iIhm0
// 비밀 키( REST API 호출에 사용 )
// sk_test_hJCzFYorik8EAeKPj0AW3LxSHEf5yS8Q
// const messageBoxRef = useRef<HTMLUListElement>();
//   const scrollToBottom = () => {
//     if (messageBoxRef.current) {
//       messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
//     }
//   };


  return (
    <Container>
          <HeadArea>
                <GlobalText>ChatBot</GlobalText>
          </HeadArea>
          <ContentArea>
            
            <FlatList
                style={{borderWidth:1,borderColor:theme.COLORS.BG_GRAY3,borderStyle:'solid'}}
                ref={flatListRef}
                onContentSizeChange={() => {
                  if (flatListRef.current) {
                    flatListRef?.current?.scrollToEnd();
                  }
                }}
                data={data}
                keyExtractor={(item,idx)=>idx.toString()}
                renderItem={({item})=>(
                    <View style={{padding:10}}>
                    
                      <View style={{display:'flex',flexDirection:'row' ,justifyContent:'space-between'}}>
                        <Text style={{marginLeft:0,fontWeight:'bold',color:item.type === 'user' ? theme.COLORS.BLUE1 : theme.COLORS.RED}}>
                          {item.type === 'user' ? `나:${submitDate}` : `ChatGPT${createDate}`}
                        </Text>
                        <Text style={{color:item.type === 'user' ? theme.COLORS.BLUE1 : theme.COLORS.RED}}>
                          {/* {submitDate} */}
                        </Text>
                      </View>
                      <Text style={{marginLeft:10,padding:10}}>{item.text}</Text>
                    </View>
                )}
                  >
                    

            </FlatList>
              <View style={{paddingTop:30,paddingBottom:30}}>
                  {loading && <ActivityIndicator color={theme.COLORS.BLUE1}/>}
              </View>
          </ContentArea>
          <FooterArea>
            <SubmitContainer>
              <InputContainer>
                <Input
                  title='텍스트를 입력해주세요.'
                  value={textInput} 
                  onChange={setTextInput}
                  multiline={true}
                  numberOfLines={1}
                />
               
                <TouchButton onPress={()=>handleSend()}>
                    <GlobalImage source={SubmitIco}/  >
                </TouchButton>
              </InputContainer>
              
            </SubmitContainer>
          </FooterArea>
    </Container>
  )
}

export default ChatBotHome