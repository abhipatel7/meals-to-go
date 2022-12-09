import { useContext, useState } from "react";

import { Spacer, Text } from "../../../../components";
import { AuthenticationContext } from "../../../../services";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from "../../components";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large" position="top">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large" position="top">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large" position="top">
          <AuthButton icon="lock-open-outline" mode="contained" onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
