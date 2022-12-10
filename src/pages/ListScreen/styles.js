import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const AddButton = styled.TouchableHighlight`
  margin-right: 15px;
  padding: 10px;
`;

export const AddButtonImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const NotesList = styled.FlatList`
  flex: 1;
  width: 100%;
`;

export const NoNotes = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoNotesImage = styled.Image`
  width: 250px;
  height: 250px;
  margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

export const LogoutButton = styled.TouchableHighlight`
  height: 60px;
  background: black;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LogoutButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
