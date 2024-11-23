import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostListContext = createContext({
  postlist: [],
  addPost: () => {},
  facthing: false,
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

  //adding intial data
  const [facthing, setfacthing] = useState(false);

  //methods for reduser
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitial = useCallback(
    (posts) => {
      dispatchPostList({
        type: "ADD_INIT",
        payload: {
          posts,
        },
      });
    },
    [dispatchPostList]
  );

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setfacthing(true);
    fetch("http://localhost:3000/api/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitial(data);
        setfacthing(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  //returning component
  return (
    <PostListContext.Provider
      value={{
        postlist,
        addPost,
        facthing,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
