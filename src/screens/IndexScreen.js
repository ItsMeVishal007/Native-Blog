import React, { useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BlogContext from "../contexts/BlogContext";

const Index = () => {
  const { val, setVal } = useContext(BlogContext);
  return (
    <View>
      <Text>{val}</Text>
      <TouchableOpacity
        onPress={() => {
          setVal((previousVal) => previousVal + 1);
        }}
      >
        <Text>add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setVal((previousVal) => previousVal - 1);
        }}
      >
        <Text>Sub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
