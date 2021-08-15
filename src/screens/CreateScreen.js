import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BlogContext from "../contexts/BlogContext";

const CreateScreen = ({ route, navigation }) => {
  const { addBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={Style.main}>
      <Text style={Style.label}>Title :</Text>
      <TextInput
        style={Style.input}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text style={Style.label}>Content :</Text>
      <TextInput
        multiline={true}
        style={Style.input}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />

      <TouchableOpacity
        style={Style.btn}
        onPress={() => {
          addBlog(title, content);
          navigation.navigate("BlogList", { title, content });
        }}
      >
        <Text style={Style.btnText}>Create Blog</Text>
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

export default CreateScreen;
