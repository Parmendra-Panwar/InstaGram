import { FaRegHeart, FaRegCommentAlt, FaRegBookmark } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import himachalImage from "./himachal.jpg";
import { IoReorderThree } from "react-icons/io5";

const Post = ({ post, onDelete }) => {
  const tags = post.tags;

  return (
    <>
      <div className="card mb-1" style={{ width: "35rem", border: "none" }}>
        <div
          className="profile ms-2"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="profile-img"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <h5 className="mx-3 my-1">{post.userId}</h5>
          <button className="follow-btn" style={{ fontSize: "1rem" }}>
            Follow
          </button>
          <IoReorderThree
            size={45}
            color="Black"
            style={{ marginLeft: "auto" }}
          />
        </div>

        <div className="card-body">
          {/* Displaying the Himachal image */}
          <img
            src={himachalImage}
            className="card-img-top"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            alt="Himachal"
          />

          <div className="card-text mt-2">
            <p style={{ fontWeight: "600" }}>
              {post.title} - {post.body}{" "}
              <span style={{ fontWeight: "490" }}>more</span>
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
          <p className="mt-2">{post.reactions} likes</p>
        </div>
      </div>

      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(post.id);
        }}
      >
        Delete
      </button>

      <hr style={{ width: "35rem" }} />
    </>
  );
};

export default Post;
