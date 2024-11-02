import { createContext, useContext, useState } from "react";

// Create post context
const PostContext = createContext();

// Custom hook to access context
function usePostContext() {
  return useContext(PostContext);
}

// Custom provider with toggle and reset functions
function CustomPostProvider({ children }) {
  const [savedPosts, setSavedPosts] = useState([]);

  // Toggle save/unsave post
  const toggleSavePost = (post) => {
    setSavedPosts((prev) => {
      if (prev.some((savedPost) => savedPost.id === post.id)) {
        // Unsave the post if it's already saved
        return prev.filter((savedPost) => savedPost.id !== post.id);
      } else {
        // Save the post if it's not yet saved
        return [...prev, post];
      }
    });
  };

  // Reset all saved posts
  const resetPosts = () => {
    setSavedPosts([]);
  };

  return (
    <PostContext.Provider value={{ savedPosts, toggleSavePost, resetPosts }}>
      {children}
    </PostContext.Provider>
  );
}

export { CustomPostProvider, usePostContext };
