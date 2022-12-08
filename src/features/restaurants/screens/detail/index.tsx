import { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { RouteProp, useRoute } from "@react-navigation/native";

import { SafeArea } from "../../../../components";
import { Card } from "../../components";

const getIcon = ({ color, icon }: { color: string; icon: IconSource }) => {
  return <List.Icon icon={icon} color={color} />;
};

export const RestaurantDetailScreen = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const {
    params: { restaurant },
  } = useRoute<RouteProp<{ params: { restaurant: any } }, "params">>();

  return (
    <SafeArea>
      <Card restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={({ color }) => getIcon({ color, icon: "bread-slice" })}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={({ color }) => getIcon({ color, icon: "hamburger" })}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={({ color }) => getIcon({ color, icon: "food-variant" })}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={({ color }) => getIcon({ color, icon: "cup" })}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
