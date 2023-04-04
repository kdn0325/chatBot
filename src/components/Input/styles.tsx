import { GlobalText } from "@/styles/global";
import { StyleContainer } from "@/types";
import styled, { css } from "styled-components/native";



export const InputContainer = styled.TextInput<StyleContainer>`
    width:100%;
    border:1px solid #CECECE;
    border-radius: 10px;
    font-size:14px;
    font-weight:400;
    color:${({theme})=> theme.COLORS.GRAY1};
    padding:${props => `${props.padding || 12}px`};
`;