import React, { useReducer } from "react";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `This is blog ${state.length + 1}`,
        },
      ];
    default:
      throw new Error();
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addBlog = () => {
    dispatch({ type: "addBlog" });
  };

  return (
    <BlogContext.Provider value={{ blogPost: state, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
