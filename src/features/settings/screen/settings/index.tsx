import { useCallback, useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { User } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamListBase, useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { SafeArea, Spacer, Text } from "../../../../components";
import { AuthenticationContext } from "../../../../services";

import { AvatarContainer, AvatarIcon, AvatarImage, SettingsListItem } from "./styles";

const getIcon = ({ color, icon }: { color: string; icon: IconSource }) => {
  return <List.Icon icon={icon} color={color} />;
};

export const SettingsScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [photo, setPhoto] = useState("");

  const getProfilePicture = async (currentUser: User) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    if (photoUri) setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user as User);
    }, [user]),
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && <AvatarIcon size={180} icon="human" />}
          {photo && <AvatarImage size={180} source={{ uri: photo }} />}
        </TouchableOpacity>

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
