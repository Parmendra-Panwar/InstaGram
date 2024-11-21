import React from "react";
import "./Story.css";

const Story = () => {
  const scrollLeft = () => {
    const container = document.querySelector(".scroll-content");
    container.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".scroll-content");
    container.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <center>
      <div className="scroll-container mb-3">
        <button className="scroll-btn left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="scroll-content">
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 1"
              className="profile-img"
            />
            <p className="profile-name">priyanshu_</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 2"
              className="profile-img"
            />
            <p className="profile-name">__shraddh...</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 3"
              className="profile-img"
            />
            <p className="profile-name">rider_govi...</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 4"
              className="profile-img"
            />
            <p className="profile-name">pradeep.ra...</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 5"
              className="profile-img"
            />
            <p className="profile-name">devendra_...</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 6"
              className="profile-img"
            />
            <p className="profile-name">mardul9354</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 7"
              className="profile-img"
            />
            <p className="profile-name">panwarrah...</p>
          </div>
          <div className="profile">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile 8"
              className="profile-img"
            />
            <p className="profile-name">ln.khale_99</p>
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </center>
  );
};

export default Story;
