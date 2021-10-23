import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SignInBox } from "../../components/SignInBox";
import { UseAuth } from "../../hooks/auth";

import { styles } from "./styles";

export function Home() {
  const { user } = UseAuth();

  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      {user ? <SendMessageForm /> : <SignInBox />}
    </View>
  );
}
