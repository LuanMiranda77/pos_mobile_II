import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import { theme } from "./src/global/styles";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" backgroundColor={theme.colorPrimary} />
        <Text color={theme.colorSecondary} fontWeight={"bold"}>
          Open up App.tsx to start working on your app!
        </Text>
        <View></View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
