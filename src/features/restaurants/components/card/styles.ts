import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const Info = styled.View`
  padding: ${({ theme: { space } }) => space[3]};
`;

export const Address = styled.Text`
  ${({ theme: { fonts, fontSizes } }) => `
    font-family: ${fonts.body};
    font-size: ${fontSizes.caption};
  `}
`;

export const RestaurantCard = styled(Card)`
  ${({ theme: { space, colors } }) => `
    background-color: ${colors.bg.primary}; ;
  `}
`;

export const RestaurantCardCover = styled(Card.Cover)`
  ${({ theme: { space, colors } }) => `
    padding: ${space[3]};
    background-color: ${colors.bg.primary}; ;
  `}
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rating = styled.View`
  flex: 1;
  flex-direction: row;
  padding-top: ${({ theme: { space } }) => space[2]};
  padding-bottom: ${({ theme: { space } }) => space[2]};
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
