import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../../components";
import { AccountBackground, AccountContainer, AccountCover, AnimationWrapper, AuthButton, Title } from "../../components";

export const AccountScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView key="animation" autoPlay loop resizeMode="cover" source={require("../../../../../assets/animations/watermelon.json")} />
      </AnimationWrapper>
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <Spacer size="large" position="top">
          <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
