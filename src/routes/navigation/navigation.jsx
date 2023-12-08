import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as LeemLogo } from "../../assets/leemlogo.svg";

import "./navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <LeemLogo
            className="logo"
            style={{ width: "50px", height: "40px" }}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/rules">
            RULES
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
