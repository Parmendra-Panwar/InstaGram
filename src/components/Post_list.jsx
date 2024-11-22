import { useContext } from "react";
import Post from "./post";
import { PostListContext } from "../store/post-list-store";
import Storys from "./Storys";

import Right_side from "./right_side";
import Wellcome from "./wellcome";

const Postlist = () => {
  const { postlist, addInitial } = useContext(PostListContext);

  const handleGetPostsClick = () => {
    // fetch posts from API
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitial(data);
      });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {postlist.length === 0 && (
            <Wellcome onGetPostClick={handleGetPostsClick} />
          )}
          {postlist.length !== 0 && <Storys />}
          {postlist.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <Right_side></Right_side>
      </div>
    </>
  );
};

export default Postlist;
