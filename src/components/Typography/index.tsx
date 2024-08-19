import { type TextProps } from 'react-native';
import { Container } from './styles';

import * as T from './types';

// Create option in Type
// accessing typing using T. return typing value

export type TypographyStyle = {
  textAlign?: T.TextAlign
  fontFamily?: T.FontFamily
  lineHeight?: T.LineHeight
  fontSize?: T.FontSizes
  color?: T.color
}

//  create a type that combines TextProps with a custom TypeStyle
type TypographyProps = TextProps & TypographyStyle



export default function Typography({...rest} : TypographyProps) {
 return (
   <Container {...rest}>
    {rest.children}
   </Container>
  );
}