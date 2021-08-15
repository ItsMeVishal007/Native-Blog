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

  return (
    <BlogContext.Provider value={{ blogPost: state, addBlog, delBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
