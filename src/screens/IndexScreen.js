import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BlogContext from "../contexts/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const Index = () => {
  const { blogPost, addBlog, delBlog } = useContext(BlogContext);
  return (
    <View style={{ padding: 20 }}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={blogPost}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={Styles.row}>
            <Text style={Styles.listText}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => delBlog(item.id)}>
              <FontAwesome name="trash" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={Styles.btn} onPress={() => addBlog()}>
        <Text style={Styles.btnText}>add Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  row: {
    height: 50,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 6,
  },
  listText: {
    fontSize: 20,
    color: "#414A4C",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "lightblue",
    textAlign: "center",
    padding: 16,
    alignSelf: "center",
    borderRadius: 6,
    width: 200,
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#414A4C",
  },
});

export default Index;
