import React, { useEffect, useLayoutEffect } from "react";
import { BackHandler, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useAuth } from "../../contexts/AuthContext";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  Container,
  AddButton,
  AddButtonImage,
  NotesList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
  ButtonsContainer,
  LogoutButton,
  LogoutButtonText,
} from "./styles";

import NoteItem from "../../components/NoteItem";

export default () => {
  const { logout } = useAuth();
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Notes List",
      headerLeft: false,
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => navigation.navigate("EditNote")}
        >
          <AddButtonImage source={require("../../assets/more.png")} />
        </AddButton>
      ),
    });
  }, []);

  const handleNotePress = (index) => {
    navigation.navigate("EditNote", {
      key: index,
    });
  };

  let [fontsLoaded, error] = useFonts({
    "WorkSans-SemiBold": require("../../../assets/fonts/WorkSans/WorkSans-SemiBold.ttf"),
    "WorkSans-Regular": require("../../../assets/fonts/WorkSans/WorkSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      {list.length > 0 && (
        <NotesList
          data={list}
          renderItem={({ item, index }) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require("../../assets/nonotes.png")} />
          <NoNotesText style={{ fontFamily: "WorkSans-SemiBold" }}>Empty</NoNotesText>
        </NoNotes>
      )}
      <ButtonsContainer>
        <LogoutButton underlayColor="#FF0000" onPress={logout}>
          <LogoutButtonText style={{ fontFamily: "WorkSans-Regular" }}>
            Logout
          </LogoutButtonText>
        </LogoutButton>
      </ButtonsContainer>
    </Container>
  );
};
