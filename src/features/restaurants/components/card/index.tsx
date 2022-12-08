import { SvgXml } from "react-native-svg";

import Open from "../../../../../assets/icons/open";
import Star from "../../../../../assets/icons/star";
import { Favorite, Spacer, Text } from "../../../../components";

import { Address, Icon, Info, Rating, RestaurantCard, RestaurantCardCover, Section } from "./styles";

interface Props {
  restaurant?: any;
}

export const Card = ({ restaurant }: Props) => {
  const { name, icon, photos, address, rating, isOpenNow, isClosedTemporarily, placeId } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml xml={Star} width={20} height={20} key={`star-${placeId}-${index}`} />
            ))}
          </Rating>
          {Boolean(isClosedTemporarily) && (
            <Spacer>
              <Text variant="error">CLOSED TEMPORARILY</Text>
            </Spacer>
          )}
          {Boolean(isOpenNow) && (
            <Spacer>
              <SvgXml xml={Open} width={20} height={20} />
            </Spacer>
          )}
          <Spacer>
            <Icon source={{ uri: icon }} />
          </Spacer>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
