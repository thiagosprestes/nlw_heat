import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";
import { UseAuth } from "../../hooks/auth";

export function Header() {
  const { user, signOut } = UseAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>Sair</Text>
          </TouchableOpacity>
        )}
        <UserPhoto imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
