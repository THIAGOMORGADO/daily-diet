import styled from "styled-components/native";

import logoImg from '@assets/logo.png'
import avatarImg from '@assets/avatar.png'

export const Container =  styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 64px 0 32px;
 
`;
export const Logo = styled.Image.attrs({source: avatarImg})``;

export const Avatar = styled.Image.attrs({source: logoImg})``;


