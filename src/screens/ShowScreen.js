import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ShowScreen = ({ route, navigation }) => {
  const { id, title } = route.params;
  console.log(">>>>>>", id, title)
  return (
    <View>
      <Text>Show Screen</Text>
    </View>
  );
};

export default ShowScreen;
