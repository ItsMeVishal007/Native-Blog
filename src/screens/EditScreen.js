import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BlogContext from "../contexts/BlogContext";

const EditScreen = ({ route, navigation }) => {
  const { EditBlog } = useContext(BlogContext);
  const { id, title, content } = route.params;
  const [isEditing, setIsEditing] = useState({
    title: false,
    content: false,
  });
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <View style={Style.main}>
      <Text style={Style.label}>Title :</Text>
      <TextInput
        style={Style.input}
        value={isEditing.title ? newTitle : title}
        onChangeText={(text) => {
          setIsEditing((prevVal) => ({
            ...prevVal,
            title: true,
          }));
          setNewTitle(text);
        }}
      />
      <Text style={Style.label}>Content :</Text>
      <TextInput
        multiline={true}
        style={Style.input}
        value={isEditing.content ? newContent : content}
        onChangeText={(text) => {
          setIsEditing((prevVal) => ({
            ...prevVal,
            content: true,
          }));
          setNewContent(text);
        }}
      />

      <TouchableOpacity
        style={Style.btn}
        onPress={() => {
          EditBlog(id, newTitle, newContent);
          navigation.navigate("Show", {
            id,
            newTitle,
            newContent,
          });
        }}
      >
        <Text style={Style.btnText}>Edit Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const Style = StyleSheet.create({
  main: {
    paddingHorizontal: 26,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#00cec9",
    textAlign: "center",
    padding: 16,
    alignSelf: "center",
    borderRadius: 6,
    width: 200,
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#ecf0f1",
    fontSize: 25,
    fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    fontSize: 18,
    padding: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#636e72",
    borderRadius: 6,
  },
});

export default EditScreen;
