import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { InputContainer } from './styles'
import { InputProps } from '@/types'

const Input = ({title,value,onChange,numberOfLines,secureTextEntry,editable,color,padding,keyboardType,multiline}:InputProps) => {

  return (
    <InputContainer
        placeholder={title}
        value={value}
        onChangeText={onChange}
        numberOfLines={numberOfLines}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        editable={editable}
        color={color}
        padding={padding}
        keyboardType={keyboardType}
    />
  )
}

export default Input                                                                                                                                                        