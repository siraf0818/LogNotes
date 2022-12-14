import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Image, TextInput, View, Pressable } from "react-native";

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.noteLogo} source={require("../../assets/logo.png")} />
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
      <Pressable
        title={"Login"}
        style={styles.lgnbutton}
        onPress={() => login(user, password)}
      >
        <Text style={styles.lgntext}>{"Login"}</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "75%",
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
  },
  lgnbutton: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "black",
  },
  lgntext: {
    color: "#fff",
    fontSize: 17,
  },
  noteLogo: {
    marginBottom: 45,
  },
});
