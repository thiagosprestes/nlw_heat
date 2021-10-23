import React from "react";
import { View } from "react-native";
import { UseAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { COLORS } from "../../theme";

import { styles } from "./styles";

export function SignInBox() {
  const { signIn, isSigningIn } = UseAuth();

  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}