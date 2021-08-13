import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [val, setVal] = useState(0);
  return (
    <BlogContext.Provider value={{ val, setVal }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
