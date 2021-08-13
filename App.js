import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogProvider } from "./src/contexts/BlogContext";
import Index from "./src/screens/IndexScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Index} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
