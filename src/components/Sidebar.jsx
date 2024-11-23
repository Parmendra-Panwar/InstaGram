import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaSearch,
  FaTelegramPlane,
  FaRegHeart,
} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { TfiInstagram } from "react-icons/tfi";
import { RiImageAddFill } from "react-icons/ri";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 Sidebar">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <FaInstagram size={35} />
        <span className="fs-4">Instagram</span>
      </a>
      <br />
      <br />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-3">
          <Link
            to="/"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <GoHomeFill size={30} color="Black" />
            <b style={{ color: "black" }}>Home</b>
          </Link>
        </li>
        <li className="nav-item mb-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <FaSearch size={30} color="Black" />
            <b className="ms-3" style={{ color: "black" }}>
              Search
            </b>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <MdOutlineExplore size={30} color="Black" />
            <b className="ms-3" style={{ color: "black" }}>
              Explore
            </b>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <TfiInstagram size={30} color="Black" />
            <b className="ms-3" style={{ color: "black" }}>
              Reels
            </b>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <FaTelegramPlane size={30} color="Black" />
            <b className="ms-3" style={{ color: "black" }}>
              Message
            </b>
          </a>
        </li>
        <li className="nav-item mb-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <FaRegHeart size={30} color="Black" />
            <b className="ms-3" style={{ color: "black" }}>
              Notification
            </b>
          </a>
        </li>
        <li className="nav-item mb-3">
          <Link
            to="/create-post"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <RiImageAddFill size={30} color="Black" />
            <b style={{ color: "black" }}>Create</b>
          </Link>
        </li>

        <li className="nav-item mb-3">
          <a
            href="#"
            className="nav-link d-flex align-items-center"
            aria-current="page"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <b className="ms-3" style={{ color: "black" }}>
              Profile
            </b>
          </a>
        </li>
      </ul>

      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>More</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
