
import { GlobalImage, GlobalText } from "@/styles/global";
import styled from "styled-components/native";



export const HeadArea = styled.View`
    align-items:center;
    width:100%;
    height:15%;
`;
export const ContentArea = styled.View`
    width:100%;
    height:70%;
    
`;
export const FooterArea = styled.View`
    width:100%;
`;


export const HeaderTxt = styled(GlobalText)`
    color:${({theme})=> theme.COLORS.BLACK};
    font-size:20px;
    font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
`;


export const InputContainer = styled.View `
    position:relative;
    align-items:center;
    margin-bottom:40px;
`;

export const TouchButton = styled.TouchableOpacity `
    position: absolute;
    top: 17px;
    right: 44px;
`;
export const ClearButton = styled.TouchableOpacity `
    position: absolute;
    top: 17px;
    right: 22px;
`;


export const Term = styled.Pressable `
    position:relative;
`


export const ViewContent = styled(GlobalText) `
     color:${({theme})=> theme.COLORS.GRAY1};
     text-decoration:underline;
     text-decoration-color: ${({theme})=> theme.COLORS.GRAY1};
     font-family:${({theme})=> theme.FONTS.POPPINSMEDIUM};
`

