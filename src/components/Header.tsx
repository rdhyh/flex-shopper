import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 col-12">
            <h1 className="display-4">Flex Shopper</h1>
          </div>
          <div className="col-md-8 col-12">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      {" "}
                      {/* Use Link to navigate to the root path */}
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categories" className="nav-link">
                      {" "}
                      {/* Link to the "Categories" page */}
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#products">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
