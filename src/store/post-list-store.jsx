import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postlist: [],
  addPost: () => {},
  addInitial: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
  if (action.type === "ADD_POST") {
    return (currPostList = [action.payload, ...currPostList]);
  }
  if (action.type === "ADD_INIT") {
    return (currPostList = action.payload.posts);
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        title: postTitle,
        body: postBody,
        reactions: Math.random(),
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitial = (posts) => {
    dispatchPostList({
      type: "ADD_INIT",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postlist,
        addPost,
        addInitial,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
