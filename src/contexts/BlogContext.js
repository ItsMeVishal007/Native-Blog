import React, { useReducer } from "react";
import jsonServer from "../api/jsonServer";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "find_json_Blogs":
      return action.payload;
    case "EditBlog":
      const result = state.find((blog) => blog.id === action.payload.id);
      result.title = action.payload.title;
      result.content = action.payload.content;
      return [...state];
    case "deleteBlog":
      return state.filter((blogpost) => blogpost.id != action.payload);
    default:
      throw new Error();
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const findJsonBlogs = async () => {
    try {
      const result = await jsonServer.get("/blogPost");
      dispatch({ type: "find_json_Blogs", payload: result.data });
    } catch (err) {
      throw Error("request failed");
    }
  };

  const addBlog = async (title, content) => {
    const result = await jsonServer.post("/blogPost", {
      title,
      content,
    });
  };

  const delBlog = async (id) => {
    try {
      await jsonServer.delete(`/blogPost/${id}`);
      dispatch({ type: "deleteBlog", payload: id });
    } catch (err) {
      console.log("error while deleting", err);
    }
  };

  const EditBlog = async (id, title, content) => {
    try {
      await jsonServer.put(`/blogPost/${id}`, {
        title,
        content,
      });
    } catch (err) {
      console.log("failed to del", err);
    }
    dispatch({ type: "EditBlog", payload: { id, title, content } });
  };

  return (
    <BlogContext.Provider
      value={{ blogPost: state, addBlog, delBlog, EditBlog, findJsonBlogs }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
