import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="divHeading">
      <header className="heading">
        <Link to="/">
          <img
            className="logo"
            src="https://static.vecteezy.com/system/resources/previews/006/691/956/original/aesthetic-minimalist-logo-design-suitable-for-your-logo-free-vector.jpg"
            alt="logo"
          />
        </Link>

        <nav>
          <ul className="navLinks">
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                if (isActive) {
                  return "activeLink";
                }
                return "pendingLink";
              }}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"addProduct"}
              className={({ isActive }) => {
                if (isActive) {
                  return "activeLink";
                }
                return "pendingLink";
              }}
            >
              <li>Add Product</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};
