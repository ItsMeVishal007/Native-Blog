import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BlogContext from "../contexts/BlogContext";

const Index = () => {
  const { blogPost, addBlog } = useContext(BlogContext);
  return (
    <View>
      <FlatList
        
        data={blogPost}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <TouchableOpacity style={Styles.btn} onPress={() => addBlog()}>
        <Text style={Styles.btnText}>add Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  btn: {
    backgroundColor: "lightblue",
    textAlign: "center",
    padding: 16,
    borderRadius: 6,
    width: 200,
    
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Index;
