import { GlobalImage, GlobalText } from "@/styles/global";
import styled from "styled-components/native";


export const SuccessContainer = styled.View`
    justify-content:center;
    align-items:center;
    width:100%;
`;

export const HeadArea = styled.View`
    align-items:center;
    width:100%;
    padding:90px 0 38px;
`;
export const ContentArea = styled.View`
    width:100%;
    /* height:85%; */
    align-items:center;
    padding-bottom:170px;
    
`;
export const FooterArea = styled.View`
    width:100%;
`;

export const SuccessText = styled(GlobalText) `
    color:${({theme})=> theme.COLORS.BLACK};
    font-family:${({theme})=> theme.FONTS.NANUMSQUARE_800};
    font-size:28px;
    line-height:32px;
`;

export const LoadingGif = styled(GlobalImage) `
    /* margin-top:38px; */
`;