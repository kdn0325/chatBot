import { View, Text } from 'react-native'
import React from 'react'
import { Button, Title } from './styles'
import { ButtonProps } from '@/types'



const ButtonBox = ({title,pressHandler,color,disabled,fontColor,width,margin}:ButtonProps) => {
  return (
    <Button onPress={(props)=>pressHandler(props)} color={color} disabled={disabled} width={width} margin={margin}>
      <Title fontColor={fontColor}>{title}</Title>
    </Button>
  )
}

export default ButtonBox