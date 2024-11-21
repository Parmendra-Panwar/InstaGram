import { FaRegHeart, FaRegCommentAlt, FaRegBookmark } from "react-icons/fa";
import { GoPaperAirplane } from "react-icons/go";
import himachalImage from "./himachal.jpg";

const Post = () => {
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

          <h5 className="mx-3 my-1">User_01</h5>

          <button className="follow-btn" style={{ fontSize: "1rem" }}>
            Follow
          </button>
        </div>

        <div className="card-body">
          <img
            src={himachalImage}
            className="card-img-top "
            style={{ width: "100%" }}
            alt="Himachal"
          />
          <p className="card-text">
            <b>
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </b>
            ...more
          </p>
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
          <p className="mt-2">3000 like</p>
        </div>
      </div>
      <hr style={{ width: "35rem" }} />
    </>
  );
};

export default Post;
