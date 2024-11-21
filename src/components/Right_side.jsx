import React from "react";
import "./right_side.css";

const Right_side = () => {
  return (
    <div className="suggestion-container">
      <div className="profile-section">
        <img
          src="https://via.placeholder.com/50"
          alt="profile"
          className="profile-image"
        />
        <div className="profile-details">
          <h4 className="profile-username">paras.panwar.davm</h4>
          <p className="profile-name">Parmendra Panwar</p>
          <a href="/" className="switch-link">
            Switch
          </a>
        </div>
      </div>

      <div className="suggested-section">
        <div className="suggested-header">
          <h5>Suggested htmlFor you</h5>
          <a href="/" className="see-all-link">
            See All
          </a>
        </div>

        <ul className="suggested-list">
          {[
            {
              username: "instagram",
              details: "Followed by umeshgurjar1293 +",
              imgSrc: "https://via.placeholder.com/50",
            },
            {
              username: "tiz_amit_panwar",
              details: "Followed by itz_anant_panwar",
              imgSrc: "https://via.placeholder.com/50",
            },
            {
              username: "_bashu_56",
              details: "Followed by ayush_o4 and 2 more",
              imgSrc: "https://via.placeholder.com/50",
            },
            {
              username: "durgapanwar460",
              details: "Followed by 100yam_jitendra_k",
              imgSrc: "https://via.placeholder.com/50",
            },
            {
              username: "shubham_kushwaha0903",
              details: "Followed by ayush_o4 and 4 more",
              imgSrc: "https://via.placeholder.com/50",
            },
          ].map((user, index) => (
            <li key={index} className="suggested-item">
              <img
                src={user.imgSrc}
                alt={user.username}
                className="suggested-profile-img"
              />
              <div className="suggested-details">
                <h6 className="suggested-username">{user.username}</h6>
                <p className="suggested-info">{user.details}</p>
              </div>
              <button className="follow-btn">Follow</button>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer-section">
        <p>
          About · Help · Press · API · Jobs · Privacy · Terms · Locations ·
          Language · Meta Verified
        </p>
        <p>© 2024 INSTAGRAM FROM META</p>
      </footer>
    </div>
  );
};

export default Right_side;
