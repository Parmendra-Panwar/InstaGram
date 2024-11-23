import { FaRegHeart, FaRegCommentAlt, FaRegBookmark } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import himachalImage from "./himachal.jpg";
import { IoReorderThree } from "react-icons/io5";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const tags = post.tags;
  const { deletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card mb-1 " style={{ width: "35rem", border: "none" }}>
        <div
          className="profile ms-2"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            src="https://via.placeholder.com/80"
            alt="Profile 3"
            className="profile-img"
            style={{ width: "40px", height: "40px" }}
          />

          <h5 className="mx-3 my-1">{post.userId}</h5>

          <button className="follow-btn" style={{ fontSize: "1rem" }}>
            Follow
          </button>
          <IoReorderThree
            size={45}
            color="Black"
            style={{ marginLeft: "19rem" }}
          />
        </div>

        <div className="card-body">
          {/* <img
            src={himachalImage}
            className="card-img-top "
            style={{ width: "100%" }}
            alt="Himachal"
          /> */}
          <div className="card-text">
            <p style={{ fontWeight: "600" }}>
              {post.title}_{post.body}
              <span style={{ fontWeight: "490" }}> . . . more</span>
            </p>
          </div>

          <p>{tags.map((tag) => ` #${tag} `)}</p>
          <p className="my-1">View All Comments</p>
          <p>Add A Comment</p>
          <div style={{ width: "32.8rem" }}>
            <FaRegHeart size={25} color="Black" />
            <FaRegCommentAlt size={25} color="Black" className="mx-2" />
            <GoPaperAirplane size={25} color="Black" />
            <FaRegBookmark
              size={25}
              color="Black"
              style={{ marginLeft: "25rem" }}
            />
          </div>
          <p className="mt-2">{post.reactions} like</p>
        </div>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => {
          deletePost(post.id);
        }}
      >
        Delete
      </button>
      <hr style={{ width: "35rem" }} />
    </>
  );
};

export default Post;
