import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  
  font-family: ${({theme}) => theme.font_family.bold};
`;