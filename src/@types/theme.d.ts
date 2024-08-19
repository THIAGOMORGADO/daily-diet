import "styled-components/native";
import theme from '../themes'

// And this is your global theme type: tem que declarar nessa forma pois atualizou  a lib

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}

}