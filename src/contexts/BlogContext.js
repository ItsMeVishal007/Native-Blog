import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  const addBlog = () => {
    setBlog((previousBlog) => [
      ...previousBlog,
      { title: `This is Blog #${blog.length + 1}` },
    ]);
  };

  return (
    <BlogContext.Provider value={{ blogPost: blog, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
