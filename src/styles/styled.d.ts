import 'styled-components';
import theme from './theme';

/* styled-component Ambient declarations 전역 확장자  */

declare module 'styled-components' {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType { }
}

declare module 'react-native' {
    interface TextProps {
      className?: string;
    }
    interface PressableProps {
      className?: string;
    }
    interface TextInputProps {
      className?: string;
    }
  
    interface ViewProps {
      className?: string;
    }
    interface InputAccessoryViewProps {
      className?: string;
    }
  
    interface ImagePropsBase {
      className?: string;
    }
  
    interface TouchableWithoutFeedbackProps {
      className?: string;
    }
    // others StyleProp<?> in node_modules/@types/react-native extends up show, should not define again.
  }