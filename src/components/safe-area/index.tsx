import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight != null && `margin-top: ${StatusBar.currentHeight}px`};
`;
