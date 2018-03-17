import React from "react";

const Header = () => (
  <div className="d-flex" style={{ background: "#0275d8" }}>
    <div className="mr-auto p-2">
      <div />
    </div>
    <div>
      <nav className="navbar navbar-expand bg-primary">
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                style={{ color: '#fff' }}
              >
                <i className="fa fa-user" /> Username
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
