import { ActivityIndicator, SafeAreaView, View } from "react-native";
import RegistrationScreen from "@/Screens/RegistrationScreen";
import LoginScreen from "@/Screens/LoginScreen";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  const [view, setView] = useState<"registration" | "login">("registration");

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <SafeAreaView>
        {view === "registration" && (
          <RegistrationScreen onChangeView={() => setView("login")} />
        )}
        {view === "login" && (
          <LoginScreen onChangeView={() => setView("registration")} />
        )}
      </SafeAreaView>
    </View>
  );
}
