import styled from "styled-components/native";

import { StyleContainer } from "@/types";
import theme from "@/styles/theme";
import { GlobalText } from "@/styles/global";

export const Button = styled.TouchableOpacity<StyleContainer>`
  /* width:50%; */
  width: ${(props) => props.width || "100%"};
  margin-left: ${(props) => `${props.margin || 0}px`};
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.color || theme.COLORS.BLUE1};
  border-radius: 10px;
`;

export const Title = styled(GlobalText)<StyleContainer>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.NANUMSQUARE_700};
  color: ${(props) => props.fontColor || theme.COLORS.WHITE};
  margin: 0 auto;
`;
