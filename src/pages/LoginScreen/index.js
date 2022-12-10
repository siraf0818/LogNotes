import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

import { Container } from "./styles";

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <TextInput
        value={user}
        onChangeText={(text) => setUser(text)}
        placeholder={"Username"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder={"Password"}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title={"Login"}
        style={styles.input}
        onPress={() => login(user, password)}
      />
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
