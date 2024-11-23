import Post from "./post";
import Storys from "./Storys";
import Right_side from "./Right_side";
import Wellcome from "./Wellcome";
import { useLoaderData } from "react-router-dom";

const Postlist = () => {
  const postlist = useLoaderData();

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
            <Post key={post.id} post={post} />
          ))}
        </div>
        <Right_side></Right_side>
      </div>
    </>
  );
};

// export const postLoader = () => {
//   fetch("http://localhost:3000/api/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("Data form Server", data);
//       return data;
//     });
// };

export const postLoader = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await response.json();
  return data; // Return the data to be used by the loader
};
export default Postlist;
