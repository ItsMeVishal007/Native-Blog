import React, { useReducer } from "react";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

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

  const addBlog = (title, content) => {
    dispatch({ type: "addBlog", payload: { title, content } });
  };

  const delBlog = (id) => {
    dispatch({ type: "deleteBlog", payload: id });
  };

  const EditBlog = (id, title, content) => {
    dispatch({ type: "EditBlog", payload: { id, title, content } });
  };

  return (
    <BlogContext.Provider
      value={{ blogPost: state, addBlog, delBlog, EditBlog }}
    > 
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
