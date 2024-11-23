import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { PostListContext } from "../store/post-list-store";
import Storys from "./Storys";

import Right_side from "./Right_side";
import Wellcome from "./Wellcome";
import Loading from "./Loading";

const Postlist = () => {
  const { postlist, facthing } = useContext(PostListContext);

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
          {facthing && <Loading />}
          {!facthing && postlist.length === 0 && <Wellcome />}
          {!facthing && postlist.length !== 0 && <Storys />}
          {!facthing &&
            postlist.map((post) => <Post key={post.id} post={post} />)}
        </div>
        {!facthing && <Right_side></Right_side>}
      </div>
    </>
  );
};

export default Postlist;
