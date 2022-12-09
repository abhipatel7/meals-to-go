import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Spacer } from "../../../../components";
import { AccountBackground, AccountContainer, AccountCover, AuthButton } from "../../components";

export const AccountScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <AccountBackground>
      <AccountCover />
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
