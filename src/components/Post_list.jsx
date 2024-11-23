import Post from "./Post";
import Storys from "./Storys";
import Right_side from "./Right_side";
import Wellcome from "./Wellcome";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Postlist = () => {
  const initialPostlist = useLoaderData(); // Initial data from the loader
  const [postlist, setPostlist] = useState(initialPostlist); // Manage state locally

  // Handle deletion of a post
  const handleDelete = async (postId) => {
    try {
      const response = await fetch("http://localhost:3000/api/posts/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: postId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      const data = await response.json();
      console.log("Post deleted:", data);

      // Update the post list state to remove the deleted post
      setPostlist((prevPostlist) =>
        prevPostlist.filter((post) => post.id !== postId)
      );
    } catch (error) {
      console.error("Error deleting post:", error);
    }
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
          {postlist.length === 0 && <Wellcome />}
          {postlist.length !== 0 && <Storys />}
          {postlist.map((post) => (
            <Post key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
        <Right_side />
      </div>
    </>
  );
};

export const postLoader = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data;
};

export default Postlist;
