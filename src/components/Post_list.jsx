import { useContext } from "react";
import Post from "./post";
import { PostListContext } from "../store/post-list-store";
import Storys from "./Storys";

import Right_side from "./right_side";

const Postlist = () => {
  const { postlist } = useContext(PostListContext);
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
          <Storys></Storys>
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
