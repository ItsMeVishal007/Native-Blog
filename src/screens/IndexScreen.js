import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import BlogContext from "../contexts/BlogContext";
import { FontAwesome } from "@expo/vector-icons";

const Index = ({ navigation }) => {
  const { blogPost, addBlog, delBlog, findJsonBlogs } = useContext(BlogContext);

  useEffect(() => {
    findJsonBlogs();
    const listner = navigation.addListener("focus", () => {
      findJsonBlogs();
    });

    return listner;
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreateBlog");
          }}
        >
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={blogPost}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Show", {
                id: item.id,
                title: item.title,
                content: item.content,
              });
            }}
          >
            <View style={Styles.row}>
              <Text style={Styles.listText}>{item.title}</Text>
              <TouchableOpacity onPress={() => delBlog(item.id)}>
                <FontAwesome name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
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
    backgroundColor: "#00cec9",
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
    color: "#ecf0f1",
  },
});

export default Index;
