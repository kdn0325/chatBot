
import { GlobalText } from "@/styles/global";
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


export const CreateInputContainer = styled.View `
    /* margin-top:40px; */
    
    /* & > .auth_input{
        display:none;
    } */
`;

export const InputContainer = styled.View `
    position:relative;
    width:100%;
    
    /* margin-top:40px; */
`;

export const SubmitContainer = styled(InputContainer) `
    position:relative;
    width:100%;
    margin-top:40px;
    align-items:center;
    
`;

export const TouchButton = styled.TouchableOpacity `
    position: absolute;
    top: 15px;
    right: 17px;
`;


export const Submit = styled(GlobalText) `
    font-size: 14px;
    font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
    align-items:center;
`;


export const TermContainer = styled.View `
    flex-direction:row;
    
    
`

export const RegisterAllCheck = styled.View `
    flex-direction:row;
    padding-bottom:21px;
    border-bottom-width:1px;
    border-style:solid;
    border-color:${({theme})=> theme.COLORS.BORDER2};
    
`

export const RegisterCheck = styled.View `
    margin-top:16px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const RegisterAllRetain = styled(GlobalText) `
     color:${({theme})=> theme.COLORS.BLACK};
     font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
     margin-left:10px;
     font-size:16px;
     
     
`

export const RegisterRetain = styled(GlobalText) `
     color:${({theme})=> theme.COLORS.BLACK};
     font-family:${({theme})=> theme.FONTS.POPPINSMEDIUM};
     font-weight:400;
     margin-left:10px;
     
     

`
export const Essential = styled(GlobalText) `
     color:${({theme})=> theme.COLORS.BLUE1};
     font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
`
export const Choice = styled(GlobalText) `
     color:${({theme})=> theme.COLORS.GRAY1};
     font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
`


export const Term = styled.Pressable `
    position:relative;
`


export const ViewContent = styled(GlobalText) `
     color:${({theme})=> theme.COLORS.GRAY1};
     text-decoration:underline;
     text-decoration-color: ${({theme})=> theme.COLORS.GRAY1};
     font-family:${({theme})=> theme.FONTS.POPPINSMEDIUM};
`

