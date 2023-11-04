import { GlobalImage, GlobalText } from "@/styles/global";
import styled from "styled-components/native";

export const HeadArea = styled.View`
  align-items: center;
  width: 100%;
  padding-top: 40px;
`;
export const ContentArea = styled.View`
  width: 100%;
  padding: 110px 0 120px;
`;
export const FooterArea = styled.View`
  width: 100%;
`;

export const LogoContainer = styled.View`
  /* padding-top:48px; */
`;
export const MainLogo = styled(GlobalImage)``;
export const LoginContainer = styled.View`
  /* width:100%; */
`;

export const InputContainer = styled.View`
  position: relative;
  margin-bottom: 8px;
`;

export const CheckText = styled(GlobalText)`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.BLUE1};
  font-family: ${({ theme }) => theme.FONTS.NANUMSQUARE_700};
`;
export const TouchButton = styled.TouchableOpacity`
  position: absolute;
  top: 17px;
  right: 17px;
`;

export const CloseImage = styled(GlobalImage)`
  width: 15px;
  height: 15px;
`;
export const EyesImage = styled(GlobalImage)`
  width: 15px;
  height: 15px;
`;

export const TabContainer = styled.View`
  padding: 0 44px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  margin: 44px 0 16px;
`;

export const LoginCheck = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const LoginRetain = styled(GlobalText)`
  color: ${({ theme }) => theme.COLORS.BLUE1};
  font-family: ${({ theme }) => theme.FONTS.NANUMSQUARE_700};
  margin-left: 8px;
  font-size: 14px;
`;

export const TabText = styled(GlobalText)`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY1};
  font-family: ${({ theme }) => theme.FONTS.NANUMSQUARE_700};
`;

export const CustomerService = styled(GlobalText)`
  text-decoration: underline;
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS.GRAY1};
  font-family: ${({ theme }) => theme.FONTS.NANUMSQUARE_700};
  font-size: 12px;
`;
