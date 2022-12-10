import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../contexts/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import ListScreen from "../pages/ListScreen";
import EditNoteScreen from "../pages/EditNoteScreen";
import LoginScreen from "../pages/LoginScreen";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const RootNavigator = () => {
  const { isAuthenticated } = useAuth();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <RootStack.Screen name="Main" component={MainNavigator} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f7f7f7",
        },
        headerTintColor: "#222",
      }}
    >
      <MainStack.Screen name="List" component={ListScreen} />
      <MainStack.Screen name="EditNote" component={EditNoteScreen} />
    </MainStack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default Navigation;
