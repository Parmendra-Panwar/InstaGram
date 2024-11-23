import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();

  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";

    let pId = Math.random().toString(36).substr(2, 9);

    fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: pId,
        reactions: Math.floor(Math.random() * 100),
        userId: userId, // Replace with actual userId variable
        title: postTitle, // Replace with actual postTitle variable
        body: postBody, // Replace with actual postBody variable
        tags: tags, // Replace with actual tags array
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add post");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Post added:", data);
        addPost(data.postData);
        Navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form
      className="row g-3 mx-3"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "35rem",
      }}
      onSubmit={handleSubmit}
    >
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          UserId
        </label>
        <input
          type="text"
          name="location"
          ref={userIdElement}
          className="form-control"
          id="validationDefault03 userId"
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="location"
          ref={postTitleElement}
          className="form-control"
          id="validationDefault03 title"
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault01" className="form-label">
          Decription
        </label>
        <textarea
          className="form-control"
          name="Descraption"
          cols="30"
          ref={postBodyElement}
          rows="5"
          id="validationDefault01 body"
          required
        ></textarea>
      </div>

      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Add Tags with space
        </label>
        <input
          type="text"
          name="location"
          ref={tagsElement}
          className="form-control"
          id="validationDefault03"
          required
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        style={{ width: "10rem" }}
      >
        AddPost
      </button>
    </form>
  );
};

export default Create;
