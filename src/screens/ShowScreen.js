import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ShowScreen = ({ route, navigation }) => {
  const { id, title, content } = route.params;
  console.log(">>>>>>", id, title);
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Title: {title}</Text>
        <Text style={Styles.content}>Content: {content}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  root: {
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  container: {
    borderWidth: 1,
    borderColor: "#636e72",
    padding: 20,
    maxHeight: 'auto',
    borderRadius: 6,
    backgroundColor:'#ffffff'
  },
  title:{
    fontSize: 28,
    color: "#414A4C",
    fontWeight: "bold"
  },
  content:{
    fontSize: 20,
    color: "#414A4C",
  }
});
export default ShowScreen;
