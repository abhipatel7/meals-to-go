import styled from "styled-components/native";

export const SearchContainer = styled.View`
  padding: ${({ theme: { space } }) => space[3]};
  position: absolute;
  z-index: 999;
  top: 35px;
  width: 100%;
`;
