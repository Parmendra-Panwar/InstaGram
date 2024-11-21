import { createContext, useReducer } from "react";

const Default_Post_list = [
  {
    id: "1",
    title: "Time_Pass",
    body: "My last xys xsyx sxys xsyx xys xxs. he is very goood man and he is cool and working very hard do you belive this. yx uxsu  xjs xx s ax xajs xab xagx cmc s zx h ajscva x zx jxjsaca nzxb cxax.",
    reactions: 45,
    userId: "User_1",
    tags: ["time_pass", "teraTimeBhiAyega"],
  },
  {
    id: "2",
    title: "Yarana",
    body: "jiji ke pass dimag nahi hai par fir bhi bo thodi  to samjhdar hai xys xsyx sxys xsyx xys xxs. he is very goood man and he is cool and working very hard do you belive this. yx uxsu  xjs xx s ax xajs xab xagx cmc s zx h ajscva x zx jxjsaca nzxb cxax.",
    reactions: 100,
    userId: "User_2",
    tags: ["jiji ka dimag", "teraTimeBhiAyega"],
  },
];

export const PostListContext = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
  if (action.type === "ADD_POST") {
    return (currPostList = [action.payload, ...currPostList]);
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    postListReducer,
    Default_Post_list
  );

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
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
