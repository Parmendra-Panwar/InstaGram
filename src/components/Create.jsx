const Create = () => {
  return (
    <form
      className="row g-3 mx-3"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="col-md-6">
        <label htmlFor="validationDefault01" className="form-label">
          Decription
        </label>
        <textarea
          className="form-control"
          name="Descraption"
          cols="30"
          rows="10"
          id="validationDefault01"
          required
        ></textarea>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Location
        </label>
        <input
          type="text"
          name="location"
          className="form-control"
          id="validationDefault03"
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          Add Tags
        </label>
        <input
          type="text"
          name="location"
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
