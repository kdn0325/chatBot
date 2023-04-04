import React from 'react';
import {LoadingGif, LoadingText } from './styles';
import Container from '@/layout';
import StartLoading from '@/assets/gif/Loading.gif';

const Loading = () => {
  return (
    <Container>
        <LoadingGif source={StartLoading}/>  
        <LoadingText>잠시만 기다려주세요...</LoadingText>
    </Container>
  );
}

export default Loading;