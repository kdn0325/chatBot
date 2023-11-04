import { ReactNode } from "react";
import { KeyboardTypeOptions, TextStyle } from "react-native";

/* 타입 모음 */

export interface StyleContainer {
  color?: string;
  lineheight?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  fontColor?: string;
  width?: any;
  margin?: any;
  style?: any;
  fontsize?: any;
  fontFamily?: any;
}

/* Navigation Screen */

export enum NavigateScreens {
  Login = "Login",
  CredentialsEmail = "CredentialsEmail",
  CredentialsPw = "CredentialsPw",
  SignupSuccess = "SignupSuccess",
  Certification = "Certification",
  ChatBotHome = "ChatBotHome",
}

/* Navigation */

export type ProfileStackParamList = {
  Login: undefined;
  Certification: undefined;
  CredentialsEmail: undefined;
  CredentialsPw: undefined;
  SignupSuccess: undefined;
  ChatBotHome: undefined;
};

/* Navigation */

export type ScreenStackParamList = {
  ChatBot: undefined;
};

/* 체크박스 */

export interface CheckBoxItem {
  id: string;
  contents: string;
}

/* 네비게이션 */

export interface NavigationProp {
  navigation?: any;
  className?: string;
  route?: any;
}

/* 레이아웃 */

export interface GlobalLayoutProps {
  // children: ReactNode;
}

/* 타이머 */

export interface Timer {
  tohour: string;
  tominute?: string;
  toseconds: string;
}

export interface ButtonProps {
  title: string;
  // pressHandler?:((props?:any) => Promise<void>);
  pressHandler?: any;
  color?: string;
  width?: string;
  disabled?: boolean;
  fontColor?: string;
  margin?: number;
}

export interface InputProps {
  title: string;
  multiline?: boolean;
  numberOfLines?: number;
  value?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  selectTextOnFocus?: boolean;
  onChange?: (text: string) => void;
  color?: string;
  padding?: number;
  lineheight?: number;
  keyboardType?: KeyboardTypeOptions;
}

export interface PopupProps {
  toggleModal: () => void;
  modalVisible: boolean;
  passwordInput: boolean;
}

export interface ModalProps {
  toggleModal: () => void;
  modalVisible: boolean;
}

export interface AccountStateProps {
  history?: Array<History>;
  title?: string;
  email?: string;
  swapList?: Array<SwapList>;
}

export interface CheckProps {
  value: boolean;
  onToggle: () => void;
}

export interface checkDataProps {
  id: number;
  check: string;
  term: string;
  content: string;
  checkstate: boolean;
}

export interface UserInfo {
  crypto_dotori: number | null;
  dotori: number | null;
  email: string | null;
  nickname: string | null;
  priv: string | null;
  secret: string | null;
  wallet: string | null;
}

export interface History {
  createdAt?: string | null;
  email?: string | null;
  _id?: string | null;
  asset?: string | null;
  created_at?: string | null;
  from?: string | null;
  hash?: string | null;
  sortation?: string | null;
  status?: number | null;
  to?: string | null;
  value?: number | null;
}

export interface SwapList {
  dotori?: number | null;
  crypto?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}
