import React from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalLayoutProps } from '@/types';
import { fontFamily } from 'styled-system';

const globals = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        paddingTop:6,
        marginLeft:16,
        marginRight:16,
        fontFamily:'NanumSquareR',
    },

})

const Container = ({ children }) => {
  return (
    <SafeAreaView style={globals.container}>
        {children}
    </SafeAreaView>
  )
}

export default Container