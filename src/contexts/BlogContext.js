import React, { useReducer } from "react";

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addBlog":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `This is blog ${state.length + 1}`,
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

  const addBlog = () => {
    dispatch({ type: "addBlog" });
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
