import { View, Text, SafeAreaView, FlatList, ScrollView ,ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { NavigationProp } from '@/types'
import Container from '@/layout'
import { ContentArea, FooterArea, HeadArea, InputContainer, SubmitContainer, TouchButton } from './styles'
import { GlobalImage, GlobalText } from '@/styles/global'
import Input from '@/components/Input'
import SubmitIco from '@/assets/img/SubmitIco.png';
import axios from 'axios'
import theme from '@/styles/theme'
import { getFormSubmit } from '@/utils/apiClient'


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
      const time = res.data.created;
      console.log('res.headers.date?' ,res.data.created)
      console.log('res.data?' ,res.data)
      
      setData([...data,{type:'user','text':textInput,'time':Unix_timestamp(time)},{type:'bot','text':text,'time':Unix_timestamp(time)}])
      setLoading(false);
      setTextInput('');
    }

    const Unix_timestamp = (t)=> {
      let date = new Date(t*1000);
      let year = date.getFullYear();
      let month = "0" + (date.getMonth()+1);
      let day = "0" + date.getDate();
      let hour = "0" + date.getHours();
      let minute = "0" + date.getMinutes();
      // var second = "0" + date.getSeconds();
      return year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" 
      // + second.substr(-2);
    }

  
  



    // const onSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    //   if (text.length == 0) {
    //     return;
    //   }
    //   e?.preventDefault(); // 버튼을 통한 제출이라면 새로고침 방지
    //   setText("");
    // };
    function getClock(t){ // getClock 함수 생성
      const hours = String(t.getHours()).padStart(2,"0"); // getHours() 시간을 받아옴 ,Number타입으로 받아온 것을 String으로 받아옴
      const minutes = String(t.getMinutes()).padStart(2,"0"); //getMinutes() 분을 받아옴 ,Number타입으로 받아온 것을 String으로 받아옴
      const seconds = String(t.getSeconds()).padStart(2,"0"); //getSeconds() 초를 받아옴 ,Number타입으로 받아온 것을 String으로 받아옴
      return `${hours}:${minutes}:${seconds}`; //clock에 innerText로 넣어줬음;
  }



    // const pressHandler = async () => {
    //     setLoading(true);
    //     setTextInput('');
    //     const formsubmit = {
    //       'text':textInput,
    //     };
    //     setLoading(false);
    //     const res = await getFormSubmit(formsubmit);
    //     // console.log("formsubmit?",formsubmit);
    //     // console.log("res?",res);
    //     // console.log("text?",textInput);
    //     // console.log("res.data 결과값 도출?",res.data);
    //     // console.log("res.headers.date?",res.headers.date);
    //     setData([...data,{type:'user','text':textInput,'time':new Date(res.headers.date)},{type:'bot','text':res.data.resMsg,'time':new Date(res.headers.date)}])
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
                        {item.type === 'user' ?
                          <View style={{flex:1,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                            <Text style={{fontWeight:'bold',color:theme.COLORS.BLUE1}} >나:</Text>
                            <Text style={{fontWeight:'bold',color:theme.COLORS.BLUE1,fontSize:12}} >{item.time}</Text>
                          </View> :
                            <View style={{flex:1,flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                              <Text style={{fontWeight:'bold',color:theme.COLORS.RED}}>ChatGPT:</Text>
                              <Text style={{fontWeight:'bold',color:theme.COLORS.RED,fontSize:12}}>{item.time}</Text>
                          </View>
                          }
                        <Text style={{color:item.type === 'user' ? theme.COLORS.BLUE1 : theme.COLORS.RED}}></Text>
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