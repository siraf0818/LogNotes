import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { AuthProvider } from "./src/contexts/AuthContext";
import { PersistGate } from "redux-persist/lib/integration/react";
import { NavigationContainer } from "@react-navigation/native";

import { store, persistor } from "./src/store";

import MainStack from "./src/stacks/MainStack";

import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <StatusBar style="dark" />
          <MainStack />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};
