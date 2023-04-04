import styled from "styled-components/native";

export const GlobalView = styled.View `
   
`;
export const SpaceBetween = styled.View `
    flex-direction:row;
   justify-content:space-between
`;
export const JustifiyCenter = styled.View `
    justify-content:center;
    align-items:center;
`;
export const FlexRow = styled.View `
    flex-direction:row;
    align-items:center;
`;
export const FlexRowStart = styled.View `
    flex-direction:row;
    align-items:flex-start;
`;

export const GlobalImage = styled.Image `
    
`;

export const GlobalText= styled.Text `
   font-family:${({theme})=> theme.FONTS.POPPINSMEDIUM};
   font-size:16px;
`;
export const GlobalCurrenyBold= styled.Text `
   font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
   font-size:16px;
`;

export const CurrenyMainTxt = styled.Text `
   color:${({theme})=> theme.COLORS.BLUE1};
   font-family:${({theme})=> theme.FONTS.NANUMSQUARE_700};
   font-size:23px;
   margin-bottom:12px;
`;
export const CurrenySubTxt= styled.Text `
   font-family:${({theme})=> theme.FONTS.POPPINSMEDIUM};
   font-size:13px;
   margin-left:10px;
`;



