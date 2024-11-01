import { useState } from "react";
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { StyleSheet } from "react-native";

import { Button } from "@/components/Button";
import { PasswordInput } from "@/components/PasswordField";
import { AddButton } from "@/components/AddButton";
import { Input } from "@/components/Input";
import { TextVariant } from "@/components/TextVariant";

type RegistrationScreenProps = {
  onChangeView: () => void;
};
export default function RegistrationScreen({
  onChangeView,
}: RegistrationScreenProps) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Усі поля мають бути заповнені");
      return;
    }
    Keyboard.dismiss();
    console.log({ email, password, username });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <Image
          source={require("@/assets/images/bgImage.jpg")}
          style={styles.bgImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <View style={styles.importImage}>
              <Image style={styles.userIcon} />
              <AddButton
                onPress={() => console.log("Add")}
                style={styles.addButton}
              />
            </View>
            <TextVariant variant="h2" title="Реєстрація" />
            <View style={styles.formContainer}>
              <Input
                onChangeText={setUsername}
                value={username}
                autoComplete="username-new"
                placeholder="Логін"
              />
              <Input
                onChangeText={setEmail}
                value={email}
                autoComplete="email"
                placeholder="Адреса електронної пошти"
                secureTextEntry={false}
              />
              <PasswordInput
                type="new-password"
                onChangeText={(item: string) => setPassword(item)}
                value={password}
              />
              <View style={styles.signIn}>
                <Button title="Зареєстуватися" onPress={handleSubmit} />
                <Button
                  onPress={onChangeView}
                  variant="transparent"
                  title="Вже є акаунт?"
                  underLineTitle="Увійти"
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
  },

  bgImage: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "relative",
    paddingBottom: 30,
  },

  importImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    position: "absolute",
  },
  userIcon: {
    width: 120,
    height: 120,
  },
  addButton: {
    transform: [{ translateX: 105 }, { translateY: -40 }],
  },
  formContainer: {
    alignItems: "center",
    gap: 16,
    width: "90%",
    marginHorizontal: "auto",
    paddingBottom: 0,
  },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 15,
  },
  signIn: {
    marginTop: 40,
    width: "100%",
    gap: 0,
  },
});
