const Wellcome = ({ onGetPostClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "40%",
        flexDirection: "column",
        marginTop: "30%",
      }}
    >
      <h2>WELLCOME GUYS</h2>
      <button className="btn btn-primary" onClick={onGetPostClick}>
        Click me
      </button>
    </div>
  );
};

export default Wellcome;
