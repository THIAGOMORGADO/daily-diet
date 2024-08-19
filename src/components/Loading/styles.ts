import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const LoadingIcon = styled.ActivityIndicator.attrs(({theme}) => ({
  size: theme.font_size.title.lg,
  color: theme.colors.base.gray_1,
}))``;