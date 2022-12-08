import { RouteProp, useRoute } from "@react-navigation/native";

import { SafeArea } from "../../../../components";
import { Card } from "../../components";

export const RestaurantDetailScreen = () => {
  const {
    params: { restaurant },
  } = useRoute<RouteProp<{ params: { restaurant: any } }, "params">>();

  return (
    <SafeArea>
      <Card restaurant={restaurant} />
    </SafeArea>
  );
};
