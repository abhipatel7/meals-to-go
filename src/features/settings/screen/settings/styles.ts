import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";

export const SettingsListItem = styled(List.Item)`
  padding: ${({ theme: { space } }) => space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const AvatarIcon = styled(Avatar.Icon)`
  background-color: ${({ theme: { colors } }) => colors.brand.primary};
`;
