import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { id, title, content, newTitle, newContent } = route.params;
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <View style={Styles.iconicTitle}>
          <Text style={Styles.title}>Title: {newTitle ? newTitle : title}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditBlog", {
                id,
                title,
                content,
              });
            }}
          >
            <Foundation name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={Styles.content}>
          Content: {newContent ? newContent : content}
        </Text>
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
    maxHeight: "auto",
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
  iconicTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    color: "#414A4C",
    fontWeight: "bold",
  },
  content: {
    fontSize: 20,
    color: "#414A4C",
  },
});
export default ShowScreen;
