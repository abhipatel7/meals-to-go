import React, { useContext } from "react";
import { List } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { User } from "firebase/auth";

import { SafeArea, Spacer, Text } from "../../../../components";
import { AuthenticationContext } from "../../../../services";

import { AvatarContainer, AvatarIcon, SettingsListItem } from "./styles";

const getIcon = ({ color, icon }: { color: string; icon: IconSource }) => {
  return <List.Icon icon={icon} color={color} />;
};

export const SettingsScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <SafeArea>
      <AvatarContainer>
        <AvatarIcon size={180} icon="human" />
        <Spacer position="top" size="large">
          <Text variant="label">{(user as User).email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsListItem
          title="Favorites"
          description="View your favorites"
          left={() => getIcon({ color: "black", icon: "heart" })}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsListItem title="Logout" left={() => getIcon({ color: "black", icon: "door" })} onPress={onLogout} />
      </List.Section>
    </SafeArea>
  );
};
