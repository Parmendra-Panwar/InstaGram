import Post from "./post";

const Postlist = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Post></Post>
      <Post></Post>
    </div>
  );
};

export default Postlist;
