import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@flexshopper.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
