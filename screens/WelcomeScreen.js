import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const WelcomeScreen = () => {
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <View className="w-60 items-center">
          <Text
            style={{ fontFamily: "Pacifico_400Regular", fontSize: 48 }}
            className="text-center"
          >
            Ready to make some coffee?
          </Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default WelcomeScreen;
