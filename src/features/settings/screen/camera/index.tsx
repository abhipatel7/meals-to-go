import React, { useContext, useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { User } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Camera, CameraType } from "expo-camera";

import { Text } from "../../../../components";
import { AuthenticationContext } from "../../../../services";

import { ProfileCamera } from "./styles";

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const cameraRef = useRef<Camera | null>();

  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef.current && user) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${(user as User).uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { granted } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(granted);
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera ref={(camera) => (cameraRef.current = camera)} type={CameraType.front} />
    </TouchableOpacity>
  );
};
