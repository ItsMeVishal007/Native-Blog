import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CreateScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text>Title :</Text>
      <TextInput
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <Text>Content :</Text>
      <TextInput
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
      />
    </View>
  );
};

export default CreateScreen;
