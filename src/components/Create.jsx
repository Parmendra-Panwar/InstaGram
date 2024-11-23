import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { PostListContext } from "../store/post-list-store";
const Create = () => {
  return (
    <Form
      method="POST"
      className="row g-3 mx-3"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "35rem",
      }}
    >
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          UserId
        </label>
        <input type="text" name="userId" className="form-control" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Title
        </label>
        <input type="text" name="title" className="form-control" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault01" className="form-label">
          Decription
        </label>
        <textarea
          className="form-control"
          name="body"
          cols="30"
          rows="5"
          required
        ></textarea>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Add Tags with space
        </label>
        <input type="text" name="tags" className="form-control" required />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        style={{ width: "10rem" }}
      >
        AddPost
      </button>
    </Form>
  );
};
export async function createPostAction(data) {
  let pId = Math.random().toString(36).substr(2, 9);
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  const finalData = {
    ...postData,
    id: pId,
    reactions: Math.floor(Math.random() * 100),
  };

  fetch("http://localhost:3000/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(finalData),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to add post");
      }
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return redirect("/");
}

export default Create;
