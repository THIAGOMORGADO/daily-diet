import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({theme}) => theme.colors.base.gray_7};
`;

export const Title = styled.Text`
  color: #000;
  
  font-family: ${({theme}) => theme.font_family.bold};
`;